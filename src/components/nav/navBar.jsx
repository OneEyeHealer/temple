import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { NavBarListItem, imgUrls, iconStyle } from "./navBar.ListItem";
import ListNavItem from "./listNavItem";
import NewOffering from "../common/newOffering";
import "./navBar.css";
import logo from "../../img/iyfrohini_logo.png";

const NavBar = ({ user, homeClick, setHomeClick, url }) => {
  const { bars, times } = iconStyle;
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <Fragment>
      <nav className="navbar-light bg-light NavBarItem">
        <div className="container-fluid">
          <Link
            className="navbar-logo"
            to={url}
            onClick={() => {
              url === "/" ? setHomeClick(false) : setHomeClick(true);
            }}
          >
            <img src={logo} alt={imgUrls.title} width="50px" height="auto" />
            &nbsp; {imgUrls.title}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? times : bars}
          </div>
          <ListNavItem
            user={user}
            setHomeClick={setHomeClick}
            click={click}
            setClick={setClick}
            list={NavBarListItem}
          />
        </div>
      </nav>
      {(url !== "/home" || url !== "/") &&
      window.location !== "/" &&
      homeClick ? (
        <NewOffering />
      ) : undefined}
    </Fragment>
  );
};
NavBar.defaultProps = {
  url: "/",
};

export default NavBar;
