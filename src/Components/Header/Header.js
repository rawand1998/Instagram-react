import {
  AddCircleOutline,
  FavoriteBorderRounded,
  SendRounded,
  //   Avatar,
  Search,
} from "@mui/icons-material";

import Avatar from "@mui/material/Avatar";
import React from "react";
import "./Style.css";
function Header() {
  const username = "xs";
  return (
    <div className="header-contanier">
      <div className="wrapper">
        <div className="headerLogo">
          <img alt = "not found" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
        </div>
        <div className="SearchContainer">
          <Search />
          <input type="search" placeholder="Search" />
        </div>
        <div className="HeaderRight">
          {username ? (
            <>
              <li className="List">
                <SendRounded className="rotate" />
              </li>
              <div className="Down">
                <li className="List">
                  <AddCircleOutline />
                </li>
                <li className="List">
                  {" "}
                  <FavoriteBorderRounded />
                </li>
                <li className="List">
                  {" "}
                  <Avatar />
                </li>
              </div>
            </>
          ) : (
            <button className="buttons">Login</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
