import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { NoteAdd } from '@mui/icons-material'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Column from './Column/Column'

function ListColumns({ columns }) {
  return (
    <>
      <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
        <Box sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          display: 'flex',
          '*::-webkit-scrollbar-track': { m: 2 }
        }}>
          {columns?.map(column => <Column key={column._id} column={column} />)}
          <Box sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d'
          }}>
            <Button startIcon={<NoteAdd />}
              sx={{
                color: 'white',
                width: '100%',
                justifyContent: 'flex-start',
                pl: 2.5,
                py: 1
              }}>Add new column</Button>
          </Box>
        </Box>
      </SortableContext>

    </>
  )
}

export default ListColumns