import React, { Component } from "react";
const Context = React.createContext();
export default class Provider extends Component {
  state = {
    collegeIDs: ["y17cs001", "y17ec001", "y17it001", "y17ee001"],
    validUsers: [
      {
        email: "one@gmail.com",
        username: "one",
        password: "one"
      },
      {
        email: "two@gmail.com",
        username: "two",
        password: "two"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
