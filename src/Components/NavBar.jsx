import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
const NavBar = () => {
  const pathname = window.location.pathname.substring(1);
  const listMenu = ["home", "about", "work", "contact"];
  const [isMenu, setIsMenu] = useState(false);
  const [NavBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={NavBar ? "nav-bar navbar-active" : "nav-bar"}>
      <div className="nav-logo">
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Gill Sans, sans-serif",
          }}
        >
          Moutik
        </Link>
      </div>
      <div className="nav-barList">
        <ul>
          {listMenu.map((list, i) => (
            <Link key={i} to={list} style={{ textDecoration: "none" }}>
              <li className={pathname === list ? "active" : "inactive"}>
                {list.toUpperCase()}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="nav-barMobile">
        <div className="nav-barMenu">
          <RiMenuFill
            onClick={() => setIsMenu(true)}
            size={25}
            style={{ cursor: "pointer", color: "white" }}
          />
          <div
            className="ListMenu"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
              background: "white",
              transform: !isMenu && "translate(-100%)",
              transition: "transform 0.4s ease-in-out",
              zIndex: "99999",
            }}
          >
            <RiCloseFill
              onClick={() => setIsMenu(false)}
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                cursor: "pointer",
              }}
              size={25}
            />
            <ul>
              {listMenu.map((list, i) => {
                return (
                  <Link
                    key={i}
                    to={list}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li
                      style={{
                        color: pathname === list && "red",
                      }}
                      onClick={(e) => setIsMenu(false)}
                    >
                      {list}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
