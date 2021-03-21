import { Paper, Typography } from '@material-ui/core'
import React from 'react'

export default class Validator extends React.Component {

  validate() {
    // if has children -> iterate  through them
    //for each child 
    //else do something
    const {children} = this.props

    if (React.Children.count(children) !== 0) {
      React.Children.forEach(children, child => {
        if (child.type === Validator) {
          doSomething(child)
        }
      })
    }
  }

  render() {

    this.validate()

    return (
      <Paper elevation={2} >
        <Typography styles={{color: "darkgreen"}}>
          Validator № {this.props.num}
        </Typography>
        {this.props.children}
      </Paper>
    )
  }
};

function doSomething(child){
  console.log(child)
}