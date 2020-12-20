import React, { Component } from "react";

class Users extends Component {
  state = {
    authors: { count: null, result: [] },
  };

  componentDidMount() {
    fetch("https://supdevinci.nine1000.tech/authors?limit=5")
      .then((response) => response.json())
      .then((rs) => this.setState({ authors: rs }))
      .catch(console.error("ERROR"));
  }
  getPagenatedData(i) {
    var url = "https://supdevinci.nine1000.tech/authors?limit=5&offset=" + i;
    fetch(url)
      .then((response) => response.json())
      .then((rs) => this.setState({ authors: rs }))
      .catch(console.error("ERROR"));
  }

  render() {
    return (
      <div>
        <div className="container">
          <center>
            <h1>Author Count = {this.state.authors.count}</h1>
          </center>
          <center>
            <h1>Author List</h1>
          </center>
        </div>
        {this.state.authors.result.map((author) => (
          <div>
            <div className="container">
              <h3>{author.id}</h3>
              <h4>{author.display_name}</h4>
              <p>{author.created_at}</p>
            </div>
          </div>
        ))}
        <div className="container">
          <li>
            <ul>
              <h7>
                Pagination :<br />
              </h7>
              {[
                ...Array(
                  this.state.authors.count % 5 === 0
                    ? Math.floor(this.state.authors.count / 5)
                    : Math.floor(this.state.authors.count / 5) + 15
                ).keys(),
              ].map((i) => (
                <a className="page" onClick={() => this.getPagenatedData(i)}>
                  -{i + 1}-
                </a>
              ))}
            </ul>
          </li>
        </div>
      </div>
    );
  }
}

export default Users;
