import { NoteAdd } from '@mui/icons-material'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Column from './Column/Column'

function ListColumns() {
  return (
    <>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'flex',
        '*::-webkit-scrollbar-track': { m: 2 }
      }}>
        <Column />
        <Column />
        <Column />

        <Box sx={{
          minWidth:'200px',
          maxWidth:'200px',
          mx: 2,
          borderRadius:'6px',
          height:'fit-content',
          bgcolor:'#ffffff3d'
        }}>
          <Button startIcon={<NoteAdd />}
            sx={{
              color: 'white',
              width: '100%',
              justifyContent:'flex-start',
              pl: 2.5,
              py: 1
            }}>Add new column</Button>
        </Box>
      </Box>
    </>
  )
}

export default ListColumns