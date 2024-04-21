import Typography from '@mui/material/Typography'
import { Attachment, Comment, Group } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>
            test
          </Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <>
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://icapps.com/uploads/site/what-is-the-right-background-for-a-react-native-developer/_1200x630_crop_center-center_82_none/React_Native_image.jpg?mtime=1594715542"
          title="green iguana"
        />
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>
            Design database
          </Typography>
        </CardContent>
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          <Button size="small" startIcon={<Group />}>20</Button>
          <Button size="small" startIcon={<Comment />}>30</Button>
          <Button size="small" startIcon={<Attachment />}>40</Button>
        </CardActions>
      </MuiCard>
    </>
  )
}

export default Card