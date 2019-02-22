import React, { Component } from 'react'
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";



export default class User extends Component {
 
  render() {    
    return (
      <div style={{ 
          marginTop: 20, 
          padding: 30, 
          "width": "50%", 
          marginLeft:"auto", 
          marginRight:"auto" 
      }}>
          <Grid  container spacing={40} justify="center">
              <Grid item >
              <Card>                
                  <CardContent>
                      <Typography variant="h5" component="h2">
                      {this.props.user.name}
                      </Typography>
                      <Typography className="pos" color="textSecondary">
                        Username: {this.props.user.username}
                      </Typography>
                      <Typography component="p">{this.props.user.email}</Typography>
                  </CardContent>                   
              </Card>
              </Grid>
          </Grid>
      </div>
    )
  }
}



