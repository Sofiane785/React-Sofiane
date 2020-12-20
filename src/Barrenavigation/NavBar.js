import React, { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo">
          <a href="postslist">⭐ Sup De Vinci la grande classe ⭐</a>
        </div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "translateX(-500px)" }}
        >
          <li>
            <a href="users">Autre utilisateur</a>
          </li>
          <li>
            <a href="contact">Contactez-nous</a>
          </li>
          <li>
            <a href="apropos">A propos de nous</a>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}
