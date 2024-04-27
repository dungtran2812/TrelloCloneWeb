import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
} from '@dnd-kit/core'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { mapOrder } from '~/utils/sort'
import ListColumns from './ListColumns/ListColumns'
import { arrayMove } from '@dnd-kit/sortable'
import { cloneDeep } from 'lodash'

import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  // pointer sensor phai ket hop css touchaction none ở phần tử kéo thả và còn bug
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  const mySensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = useState([])

  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColumnStartDrag, setOldColumnStartDrag] = useState(null)

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column?.cards?.map(card => card._id)?.includes(cardId))
  }

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id),
      setActiveDragItemType(event?.active?.data?.current?.columnId ?
        ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN),
      setActiveDragItemData(event?.active?.data?.current)

    if (event?.active?.data?.current?.columnId) {
      setOldColumnStartDrag(findColumnByCardId(event?.active?.id))
    }
  }
  //qua trinh keo cua 1 element
  const handleDragOver = (event) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return
    // console.log('handleDragOver:', event)

    const { active, over } = event
    if (!active || !over) return

    const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
    const { id: overCardId } = over

    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    //keo qua column khac
    if (activeColumn._id !== overColumn._id) {
      setOrderedColumns(prevColumns => {
        const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

        let newCardIndex
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height

        const modifier = isBelowOverItem ? 1 : 0
        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

        //clone mảng ordercolumn
        const nextColumns = cloneDeep(prevColumns)
        const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)

        const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

        //column cũ
        if (nextActiveColumn) {
          //xóa card ở column (column cũ, column bị kéo ra khỏi)
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
          //cập nhật lại mảng card order ids
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
        }

        //column mới
        if (nextOverColumn) {
          //kiểm tra xem card kéo có tồn tại ở overcolumn chưa có thì xóa
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
        }
        // console.log('nextOverColumn', nextOverColumn)
        // console.log('nextActiveColumn', nextActiveColumn)
        // console.log('nextColumns', nextColumns)
        return nextColumns
      })
    }
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!active || !over) return
    // console.log('handle drag end:', event)
    //xử lý kéo thả card
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
      const { id: overCardId } = over

      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      if (!activeColumn || !overColumn) return

      if (oldColumnStartDrag._id !== overColumn._id) {
        console.log('hanh dong keo tha card giua 2 column khac nhau')
      } else {
        const oldCardIndex = oldColumnStartDrag?.cards?.findIndex(c => c._id === activeDragItemId) //old position from active
        const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId) //new position from over
        const dndOrderedCards = arrayMove(oldColumnStartDrag?.cards, oldCardIndex, newCardIndex)
        setOrderedColumns(prevColumns => {
          const nextColumns = cloneDeep(prevColumns)
          const targetColumns = nextColumns.find(column => column._id === overColumn._id)
          targetColumns.cards = dndOrderedCards
          targetColumns.cardOrderIds = dndOrderedCards.map(card => card._id)
          return nextColumns
        })

      }
    }
    //xử lý kéo thả column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active.id !== over.id) {
        const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id) //old position from active
        const newColumnIndex = orderedColumns.findIndex(c => c._id === over.id) //new position from over
        const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)
        // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
        // console.log(dndOrderedColumns)
        // console.log(dndOrderedColumnsIds)
        setOrderedColumns(dndOrderedColumns)
      }
    }

    setActiveDragItemId(null),
      setActiveDragItemType(null),
      setActiveDragItemData(null),
      setOldColumnStartDrag(null)
  }

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <>
      <DndContext
        sensors={mySensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Box sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          bgcolor: (theme) => (
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
          ),
          p: '10px 0'
        }}>
          <ListColumns columns={orderedColumns} />
          <DragOverlay dropAnimation={customDropAnimation}>
            {(!activeDragItemType) && null}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
          </DragOverlay>
        </Box>
      </DndContext>
    </>
  )
}

export default BoardContent
