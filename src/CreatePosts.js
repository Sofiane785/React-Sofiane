import React from "react";
import axios from "axios";

export default class CreatePosts extends React.Component {
  state = {
    title: null,
    content: null,
    created_at: null,
  };

  handletitle = (event) => {
    this.setState({ title: event.target.value });
  };
  handlecontent = (event) => {
    this.setState({ content: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const headers = {
      "x-token":
        "03d3daad685ac4ab17d8a223d412db559b7cfd09443f51b7cd0c472d5ff45909057509f9abe830d0e1ba88dd20258bdf6d9c0e474d3a8a28d7a51f62756bf6674300d4f3e6ec2b458d10dd7d8f2bc723ab5a9b5103cbfad085b673424607d4d9298ccc44428e3db7e5ac4763d59a95c78edad6c4624f5bc488a93f0191344e9c6993004e38250c1178d138507e4f9146027af4eb14bd8df865fb79480756c99edc5c36bcbc879d29aa8a8f8884d16971fe6ea5b793aac1c1e0a667db5256abd2705ecf1acba6f82ac6cf044630e2ce68473f729d7fb91158124716fbd3691076ce81b93bc790902ce3122eea7dae4949f0f9374510f1dbd2ccb8a35ec9f7da51",
    };

    const post = { title: this.state.title, content: this.state.content };

    axios
      .post("https://supdevinci.nine1000.tech/posts", post, { headers })
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <div>
          <label>
            title:{" "}
            <input
              type="text"
              name="this.state.title"
              onChange={this.handletitle}
            />
          </label>
        </div>
        <div>
          <label>
            content:{" "}
            <input
              type="text"
              name="this.state.content"
              onChange={this.handlecontent}
            />
          </label>
        </div>
        <div>
          <button type="submit">Valider</button>
        </div>
      </form>
    );
  }
}
