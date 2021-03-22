import { Paper } from "@material-ui/core";
import React from "react";

const Cnx = React.createContext([]);

export default class Validator extends React.Component {
  constructor(props) {
    super(props);

    //array that must be passed down through context to be filled with validate methods
    this.decendantsMethods = []; 
    //state to visually represent a call of method "validate"
    this.state = {isValidated: false}
  }

  componentDidMount() {
    //push own "validate" method to array provided by context
    this.context.push(this.validate);
  }

  validate = () => {
    //perform some action (in this case toggel state)
    this.setState(state => ({isValidated: !state.isValidated}) ) 
    //and call "validate" in every child 
    this.decendantsMethods.forEach(method => method());
  };

  render() {
    const paperStyle = this.state.isValidated 
      ? {elevation: 2} : {variant: "outlined"};
    
    return (
      <Paper {...paperStyle} >
        <h3>
          Validator № {this.props.num}
          <button onClick={this.validate}>Validate</button>
        </h3>
        <Cnx.Provider value={this.decendantsMethods}>
          {this.props.children}
        </Cnx.Provider>
      </Paper>
    );
  }
}

Validator.contextType = Cnx;
