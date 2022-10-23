import { Card, CardMedia, CardContent, Typography, List, ListItemText } from '@mui/material'

const renderFighter = (fighter) => {
  return (
    <Card sx={{}}>
      <CardMedia
        height={400}
        component="img"
        image={fighter?.appearance}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {fighter.name}
        </Typography>
        <List>
          <ListItemText
            primary={`Elämäpisteet ${fighter.health}`}
          />
          <ListItemText
            primary={`Hyökkäys ${fighter.attack}`}
          />
          <ListItemText
            primary={`Puolustus ${fighter.defence}`}
          />
          <ListItemText
            primary={`Nopeus ${fighter.speed}`}
          />
        </List>
      </CardContent>
    </Card >
  )
}

function Fighter(props) {
  return props.fighter?.name ? renderFighter(props.fighter) : undefined;
}

export default Fighter;
