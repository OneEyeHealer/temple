import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import IsUser from "../IsUser";
const ListNavItem = ({
  user,
  click,
  setClick,
  setHomeClick,
  list,
  liProperty,
  aProperty,
  titleProperty,
  urlProperty,
}) => {
  return (
    <Fragment>
      <ul className={click ? "nav-menu active bg-light" : "nav-menu"}>
        {list.map((item, index) => {
          return (
            <li className={item[liProperty]} key={index}>
              <Link
                className={item[aProperty]}
                to={item[urlProperty]}
                onClick={() => {
                  setClick(!click);
                  item[urlProperty] === "/home"
                    ? setHomeClick(false)
                    : setHomeClick(true);
                }}
              >
                {item[titleProperty]}
              </Link>
            </li>
          );
        })}
        {/* <IsUser user={user}/> */}
      </ul>
    </Fragment>
  );
};
ListNavItem.defaultProps = {
  liProperty: "liCName",
  aProperty: "aCName",
  titleProperty: "title",
  urlProperty: "url",
};
export default ListNavItem;
