import React from "react";

export default function Route() {
  return (
    <div>
      <Router>
        <NavBar />

        <switch>
          <Route path="/app" exact component={PostsList} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/apropos" exact component={Apropos} />
          <Route path="/users" exact component={Users} />
          <Route path="/createposts" exact component={CreatePosts} />
          <Route path="/postslist" exact component={PostsList} />
          <Route path="/commentaire" exact component={Commentaire} />
          <Route path="/openposts" exact component={OpenPosts} />
          //
          <Route path="/gestionposts" exact component={GestionPosts} />
        </switch>
      </Router>
    </div>
  );
}
