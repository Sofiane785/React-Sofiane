import React from "react";
import "./App.css";
import "./Body.css";
import Contact from "./Pagemenu/Contact";
import Apropos from "./Pagemenu/Apropos";
import Users from "./Pagemenu/Users";
import NavBar from "./Barrenavigation/NavBar";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import CreatePosts from "./CreatePosts";
import PostsList from "./PostsList";
import OpenPosts from "./OpenPosts";
import GestionPosts from "./GestionPosts";
import Commentaire from "./Commentaire";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <switch>
          <Route path="/contact" exact component={Contact} />
          <Route path="/apropos" exact component={Apropos} />
          <Route path="/users" exact component={Users} />
          <Route path="/createposts" exact component={CreatePosts} />
          <Route path="/postslist" exact component={PostsList} />
          <Route path="/commentaire" exact component={Commentaire} />
          <Route path="/openposts" exact component={OpenPosts} />
          <Route path="/gestionposts" exact component={GestionPosts} />
        </switch>
      </Router>

      <div className="basdepage">
        <footer>
          <p>© 2020 Sofiane Tiouassiouine - Sup De Vinci</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
