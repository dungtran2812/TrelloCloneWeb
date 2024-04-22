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
import { capitalizeFirstLetter } from '~/utils/formatter'

const MENU_STYLE = {
  color:'white',
  backgroundColor:'transparent',
  border:'none',
  paddingX:'5px',
  borderRadius:'4px',
  '.MuiSvgIcon-root' : {
    color:'white'
  },
  '&:hover': {
    bgcolor:'primary.50'
  }
}

function BoardBar({ board }) {
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
        paddingX: 2,
        bgcolor: (theme) => (
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
        )
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
          />
          <Chip
            sx={MENU_STYLE}
            icon={<VpnLockIcon />}
            label= {capitalizeFirstLetter(board?.type)}
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
          <Button
            variant='outlined'
            startIcon={<PersonAddIcon />}
            sx= {{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor:'white'
              }
            }}
          >
            Invite
          </Button>
          <AvatarGroup
            max={7}
            sx= {{
              gap:'10px',
              '& .MuiAvatar-root': {
                width: 34,
                height: 34,
                fontSize: 16,
                border:'none',
                color:'white',
                cursor:'pointer',
                '&:first-of-type': {bgcolor:'#a4b0be'}
              }
            }}
          >
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/427882541_1377651606454468_2650009597030579197_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_gq8FeNS8vQAb6PRVm7&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfCRniZ2xODWmEmGcQCKmrNJQ44aziHezv_TEX6LkOAnnw&oe=662BF64D"
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/434655765_2186833181666902_8919608324179202828_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LvwDeJzcUY8Ab5eIq0K&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDxszq97AcKnVsD-XJadfLNG1UT2QXg_NEkWuMDZnc3rA&oe=662C004B"
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/432783625_968395744916002_7562829046057230045_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Z7910qWKu2MAb76I3z0&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfD9TQB6rXEG4JNHdWMJhjltERE9IBiyqGAvpaEKGGKKOg&oe=662BFED7"
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/437784898_1261571224811485_3822865762562856088_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yiwgqwajgKMAb7VApLN&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfDXaWaLjrO7lUkCqoK6ZUhtcH1uyRbCfMgwvUlRGUpnSw&oe=662C0C21"
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/246142451_1088632288545462_1655627781083416421_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jLoNgqsCo8kAb4vX4hC&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfC50A9eF78NUOEX0FfDMhgloc-YnV7I9CqzHIniMuKyCw&oe=662BFC49"
              />
            </Tooltip>
            <Tooltip title='dungtran'>
              <Avatar
                alt="dungtran"
                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/364708829_1714521608971734_7437894059025187558_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=T2hx8oTMCrwAb5wptQT&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfAX79SjYRS5B34hZQEqGNRylYOvsIVVIsjkIEjDcO_ZHw&oe=662C17FF"
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
