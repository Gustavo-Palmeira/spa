import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../auth";
import NewPost from "../post/NewPost";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const [isNewPost, setIsNewPost] = useState(false);

  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Senacgram
        </Link>
        <ul className="flex-fill d-flex flex-row navbar-nav">
          <li className="nav-item me-auto">
            <Link to="/explorer" className="nav-link">
              Explorer
            </Link>
          </li>
          <div className="d-flex flex-row">
            <li className="nav-item ms-auto">
              <button className="btn" onClick={() => setIsNewPost(!isNewPost)}>Novo Post</button>
              <NewPost isNewPost={isNewPost} />
            </li>
            <li className="nav-item ms-auto">
              <Link to="/explorer" className="nav-link">
                {currentUser.name}
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
