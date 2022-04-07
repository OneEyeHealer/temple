import React from "react";
const [nItem, nLink] = ["nav-li", "nav-a"];
const [bars, times] = [
  <i className="fa fa-bars" />,
  <i className="fa fa-times" />,
];
const logoURL = "../../img/iyfrohini_logo.png";
const logoTITLE = "IYF Rohini";
export const NavBarListItem = [
  {
    title: "Home",
    url: "/home",
    liCName: nItem,
    aCName: nLink,
  },
  {
    title: "About",
    url: "/about",
    liCName: nItem,
    aCName: nLink,
  },
  {
    title: "Activity",
    url: "/activity",
    liCName: nItem,
    aCName: nLink,
  },
  {
    title: "Offerings",
    url: "/offerings",
    liCName: nItem,
    aCName: nLink,
  },
  {
    title: "Contact",
    url: "/contact",
    liCName: nItem,
    aCName: nLink,
  },
  // {
  //     title: "Login",
  //     url: "/login",
  //     liCName: nItem,
  //     aCName: "nav-login"
  // }
];
export const imgUrls = {
  logo: logoURL,
  title: logoTITLE,
};

export const iconStyle = {
  bars,
  times,
};
