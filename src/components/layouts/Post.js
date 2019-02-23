import React, { Component } from 'react'
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";



export default class Post extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChangeButton = (e) => {
    if(e.currentTarget.value === 'Delete'){
      this.handleDelete();
    }else{
      this.handleEdit();
    }
    e.preventDefault();
  }

  handleDelete(){
    this.props.onDelete(this.props.post.id);
  }

  handleEdit(){
    this.props.onEdit(this.props.post);
    // need to re-route to edit form here, passing in post id
    this.props.history.push('/posts/edit/'+ this.props.post.id);
  }
  

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
                      {this.props.post.title}
                      </Typography>
                      <Typography className="pos" color="textSecondary">
                      {this.props.author}
                      </Typography>
                      <Typography component="p">{this.props.post.body}</Typography>
                  </CardContent>
                   <Button
                    variant="contained"
                    label="Default"
                    onClick = { this.handleChangeButton }
                    value="Edit"
                  >
                    Edit
                  </Button>      
                  <Button
                    variant="contained"
                    label="Default"
                    onClick = { this.handleChangeButton }
                    value="Delete"
                  >
                    Delete
                  </Button>            
              </Card>
            </Grid>
         </Grid>
       </div>
      )  
  } // end of render function
} // end of post class


