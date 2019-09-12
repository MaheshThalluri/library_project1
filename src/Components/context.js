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
    ],
    userProfile: [
      {
        collegeId: "y17cs001",
        username: "one",
        password: "one",
        email: "one@gmail.com",
        fullName: "John B Smith",
        dept: "computer science",
        profile_pic: "add an image",
        history: [
          {
            bookname: "c-for begineers",
            bookID: "cs001",
            issuedDate: "12-01-2001",
            submissionDate: "27-01-2001",
            submittedDate: "27-01-2001",
            fine: 0
          },
          {
            bookname: "discrete mathematics",
            bookID: "cs002",
            issuedDate: "12-01-2001",
            submissionDate: "27-01-2001",
            submittedDate: "27-01-2001",
            fine: 0
          },
          {
            bookname: "Data Base Management Systems",
            key: "c",
            bookID: "cs003",
            issuedDate: "12-01-2001",
            submissionDate: "27-01-2001",
            submittedDate: "02-02-2001",
            fine: 5
          }
        ]
      }
    ],
    Books: [
      {
        bookName: "c for begineers",
        Author: "dennis ritchie",
        bookID: "cs001",
        availability: "yes",
        rating: "star rating",
        url: ""
      },
      {
        bookName: "c for begineers",
        Author: "dennis ritchie",
        bookID: "cs002",
        availability: "yes",
        rating: "star rating",
        url: ""
      },
      {
        bookName: "c for begineers",
        Author: "dennis ritchie",
        bookID: "cs003",
        availability: "yes",
        rating: "star rating",
        userscount: 0,
        url: ""
      },
      {
        bookName: "c for begineers",
        Author: "dennis ritchie",
        bookID: "cs004",
        availability: "yes",
        rating: "star rating",
        userscount: 0,
        url: ""
      },
      {
        bookName: "c for begineers",
        Author: "dennis ritchie",
        bookID: "cs005",
        availability: "yes",
        rating: "star rating",
        userscount: 0,
        url: ""
      },
      {
        bookName: "c for begineers",
        Author: "dennis ritchie",
        bookID: "cs006",
        availability: "yes",
        rating: "star rating",
        userscount: 0,
        url: ""
      },
      {
        bookName: "c for begineers",
        Author: "dennis ritchie",
        bookID: "cs007",
        availability: "yes",
        rating: "star rating",
        userscount: 0,
        url: ""
      }
    ],
    RecentlyAdded: ["cs005", "cs006", "cs007"],
    MostPopular: ["cs002", "cs003", "cs004"],
    User: "UserName",
    currentUser: user => {
      let { User } = { ...this.state };
      User = user;
      this.setState({ User });
    }
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
