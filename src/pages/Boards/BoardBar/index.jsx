import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color:'primary.main',
  backgroundColor:'white',
  border:'none',
  paddingX:'5px',
  borderRadius:'4px',
  '& .MuiSvgIcon-root' : {
    color:'primary.main'
  },
  '&:hover': {
    bgcolor:'primary.50'
  }
}

function BoardBar() {
  return (
    <>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderTop:'1px solid #00bfa5',
        paddingX: 2
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label="dungtran2812"
            clickable
          />
          <Chip
            sx={MENU_STYLE}
            icon={<VpnLockIcon />}
            label="Public/Private Workspace"
            clickable
          />
          <Chip
            sx={MENU_STYLE}
            icon={<AddToDriveIcon />}
            label="Add to Google Drive"
            clickable
          />
          <Chip
            sx={MENU_STYLE}
            icon={<ElectricBoltIcon />}
            label="Automation"
            clickable
          />
          <Chip
            sx={MENU_STYLE}
            icon={<FilterListIcon />}
            label="Filters"
            clickable
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant='outlined' startIcon={<PersonAddIcon />}>Invite</Button>
          <AvatarGroup
            max={7}
            sx= {{
              '& .MuiAvatar-root': {
                width: 34,
                height: 34,
                fontSize: 16
              }
            }}
          >
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://avatars.githubusercontent.com/u/155450761?v=4" 
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://avatars.githubusercontent.com/u/155450761?v=4" 
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://avatars.githubusercontent.com/u/155450761?v=4" 
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://avatars.githubusercontent.com/u/155450761?v=4" 
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://avatars.githubusercontent.com/u/155450761?v=4" 
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://avatars.githubusercontent.com/u/155450761?v=4" 
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://avatars.githubusercontent.com/u/155450761?v=4" 
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://avatars.githubusercontent.com/u/155450761?v=4" 
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://avatars.githubusercontent.com/u/155450761?v=4" 
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}

export default BoardBar
