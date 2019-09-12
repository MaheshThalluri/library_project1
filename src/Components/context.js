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
            status: "yes"
          }
        ]
      }
    ],
    Books: [
      {
        bookName: "The Complete Reference - C++",
        Author: " Herbert Schieldt",
        bookID: "cs001",
        availability: "yes",
        rating: "4",
        edition: "4",
        keyword: ["c++"],
        url:
          "https://images-na.ssl-images-amazon.com/images/I/51hZK5yIWIL._SX402_BO1,204,203,200_.jpg"
      },
      {
        bookName: "Automate the Boring Stuff with Python",
        Author: "Al Sweigart",
        bookID: "cs002",
        availability: "yes",
        rating: "4.5",
        keyword: ["py"],
        edition: "1",
        url:
          "https://images-na.ssl-images-amazon.com/images/I/51o-3Nx9bBL._SX376_BO1,204,203,200_.jpg"
      },
      {
        bookName: "Computer Organisation",
        Author: " Carl Hamacher",
        bookID: "cs003",
        availability: "yes",
        rating: "4",
        userscount: 0,
        edition: "5",
        keyword: ["co"],
        url:
          "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-phrQQ5nJGTk%2FVdWj5gTU7UI%2FAAAAAAAACGw%2FWcCxD6HgSTU%2Fs320%2Fimage001-785377.jpg&f=1&nofb=1https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-phrQQ5nJGTk%2FVdWj5gTU7UI%2FAAAAAAAACGw%2FWcCxD6HgSTU%2Fs320%2Fimage001-785377.jpg&f=1&nofb=1"
      },
      {
        bookName: "Computer Networks",
        Author: " Andrew S. Tanenbaum",
        bookID: "cs004",
        availability: "yes",
        rating: "4.5",
        keyword: ["cn"],
        edition: "5",
        userscount: 0,
        url:
          "https://images-na.ssl-images-amazon.com/images/I/51zpWI5lejL._SX398_BO1,204,203,200_.jpg"
      },
      {
        bookName: "Software Engineering",
        Author: "Roger S.Pressman",
        bookID: "cs005",
        availability: "yes",
        rating: "4",
        edition: "7",
        keyword: ["se"],
        userscount: 0,
        url:
          "https://images-na.ssl-images-amazon.com/images/I/41INSSf3UlL._SY298_BO1,204,203,200_.jpg"
      },
      {
        bookName: "C Programming Language",
        Author: "Brian W. Kernighan",
        bookID: "cs006",
        availability: "yes",
        rating: "4.5",
        edition: "2",
        keyword: ["c"],
        userscount: 0,
        url:
          "data:image/webp;base64,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"
      },
      {
        bookName: "Machine Learning for Text",
        Author: "Charu C. Aggarwal",
        bookID: "cs007",
        availability: "yes",
        rating: "4",
        edition: "5",
        userscount: 0,
        keyword: ["ml"],
        url:
          "data:image/webp;base64,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"
      }
    ],
    RecentlyAdded: ["cs005", "cs006", "cs007"],
    MostPopular: ["cs002", "cs003", "cs004"],
    User: "UserName",
    currentUser: user => {
      let { User } = { ...this.state };
      User = user;
      console.log(User);
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
