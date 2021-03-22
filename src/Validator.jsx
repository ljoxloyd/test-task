import { Paper } from "@material-ui/core";
import React from "react";

const Cnx = React.createContext([]);

export default class Validator extends React.Component {
  constructor(props) {
    super(props);

    //массив который нужно передать детям через контекст 
    this.decendantsMethods = []; 
    //состояние чтобы визуально отображать работу метода "validate"
    this.state = {isValidated: false}
  }

  componentDidMount() {
    //добавляю собственный "validate" метод к массиву полученному через контекст
    this.context.push(this.validate);
  }

  validate = () => {
    //выполняет некое действие (в данном случае переключение состояния)
    this.setState(state => ({isValidated: !state.isValidated}) ) 
    //и вызывает каждый "validate" из массива заполненого компонентами-детьми
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
