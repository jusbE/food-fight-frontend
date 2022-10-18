import { Card, CardMedia, CardContent, Typography } from '@mui/material'

function Fighter(props) {
  return (
      <Card sx={{}}>
        <CardMedia
          component="img"
          image={props.fighterLink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.fighterName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stats will be added here...
          </Typography>
        </CardContent>
      </Card>
    );
}

export default Fighter;
