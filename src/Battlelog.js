import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

class Battlelog extends React.Component {
  renderLogEvent(logEvent) {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={logEvent.attackerLink} />
        </ListItemAvatar>
        <ListItemText
          primary={`At ${logEvent.eventTime} ${logEvent.attacker} attacked with ${logEvent.damage} damage`}
          secondary={`${logEvent.defender} remaining health ${logEvent.defenderHealth}`}
        />
      </ListItem>
    )
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            Battlelog
          </Typography>
          <List>
            {this.props.battleLog?.events?.map(logEvent => {
              return this.renderLogEvent(logEvent)
            })}
          </List >
          <Typography gutterBottom variant="h5">
            {this.props.battleLog ? `${this.props.battleLog.winner} is a winner!` : ''}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Battlelog;
