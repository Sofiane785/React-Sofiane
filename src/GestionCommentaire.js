import React, { Component } from "react";
import axios from "axios";

//J'ai fais ca a l'aveugle car l'url ne marche pas j'ai un "Not Found" sur internet
//https://supdevinci.nine1000.tech/comments alors qu'avec posts ou authors ca marche
//https://supdevinci.nine1000.tech/posts et https://supdevinci.nine1000.tech/authors
//J'ai ajoutés un dossier avec les screen dans le rendu

class GestionCommentaire extends Component {
  state = {
    comments: {
      count: null,
      id: null,
      content: null,
      title: null,
      author: null,
      created_at: null,
      updated_at: null,
      result: [],
    },
  };

  deleteclick(s) {
    const headers = {
      "x-token":
        "03d3daad685ac4ab17d8a223d412db559b7cfd09443f51b7cd0c472d5ff45909057509f9abe830d0e1ba88dd20258bdf6d9c0e474d3a8a28d7a51f62756bf6674300d4f3e6ec2b458d10dd7d8f2bc723ab5a9b5103cbfad085b673424607d4d9298ccc44428e3db7e5ac4763d59a95c78edad6c4624f5bc488a93f0191344e9c6993004e38250c1178d138507e4f9146027af4eb14bd8df865fb79480756c99edc5c36bcbc879d29aa8a8f8884d16971fe6ea5b793aac1c1e0a667db5256abd2705ecf1acba6f82ac6cf044630e2ce68473f729d7fb91158124716fbd3691076ce81b93bc790902ce3122eea7dae4949f0f9374510f1dbd2ccb8a35ec9f7da51",
    };
    axios
      .delete("https://supdevinci.nine1000.tech/comments/" + s, { headers })
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  handletitle = (event) => {
    this.setState({ title: event.target.value });
  };
  handlecontent = (event) => {
    this.setState({ content: event.target.value });
  };

  Modifclick(id) {
    const headers = {
      "x-token":
        "03d3daad685ac4ab17d8a223d412db559b7cfd09443f51b7cd0c472d5ff45909057509f9abe830d0e1ba88dd20258bdf6d9c0e474d3a8a28d7a51f62756bf6674300d4f3e6ec2b458d10dd7d8f2bc723ab5a9b5103cbfad085b673424607d4d9298ccc44428e3db7e5ac4763d59a95c78edad6c4624f5bc488a93f0191344e9c6993004e38250c1178d138507e4f9146027af4eb14bd8df865fb79480756c99edc5c36bcbc879d29aa8a8f8884d16971fe6ea5b793aac1c1e0a667db5256abd2705ecf1acba6f82ac6cf044630e2ce68473f729d7fb91158124716fbd3691076ce81b93bc790902ce3122eea7dae4949f0f9374510f1dbd2ccb8a35ec9f7da51",
    };

    const post = {
      title: this.state.title,
      content: this.state.content,
    };
    console.log(id);
    axios
      .put("https://supdevinci.nine1000.tech/comments/" + id, post, {
        headers,
      })
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  componentDidMount() {
    fetch("https://supdevinci.nine1000.tech/comments?author=27")
      .then((response) => response.json())
      .then((rs) => this.setState({ posts: rs }))
      .catch(function (error) {
        console.log(error);
      });
  }
  getPagenatedData(i) {
    var url = "https://supdevinci.nine1000.tech/comments?author=27&offset=" + i;
    fetch(url)
      .then((response) => response.json())
      .then((rs) => this.setState({ posts: rs }))
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <center>
            <h1>Posts count = {this.state.comments.count}</h1>
          </center>
          <center>
            <h1>Posts Listes</h1>
          </center>
          <a href="CreatePosts">
            Ajouter un commentaire
            <br />
          </a>
        </div>
        {this.state.comments.result.map((comment) => (
          <div className="container">
            <div>
              <a href="OpenPosts" className="title">
                {comment.title}
              </a>
              <h4>{comment.created_at}</h4>
              <div>
                {
                  <button onClick={() => this.deleteclick(comment.id)}>
                    Supprimer ce commentaire
                  </button>
                }
              </div>
              <h3>Espace Modification Commentaire</h3>
              <label>
                content:{" "}
                <input
                  type="text"
                  name="this.state.content"
                  onChange={this.handletitle}
                />
              </label>
              <div>
                {
                  <button onClick={() => this.Modifclick(comment.id)}>
                    Modifer ce commentaire
                  </button>
                }
              </div>
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
                  this.state.comments.count % 4 === 0
                    ? Math.floor(this.state.comments.count / 4)
                    : Math.floor(this.state.comments.count / 4) + 1
                ).keys(),
              ].map((i) => (
                <a
                  className="page"
                  onClick={() => this.getPagenatedData(i + 1)}
                >
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

export default GestionCommentaire;
