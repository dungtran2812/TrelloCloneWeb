import Box from '@mui/material/Box'
import { mapOrder } from '~/utils/sort'
import ListColumns from './ListColumns/ListColumns'

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor: (theme) => (
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
        ),
        p: '10px 0'

      }}>
        <ListColumns columns={orderedColumns}/>
      </Box>
    </>
  )
}

export default BoardContent
