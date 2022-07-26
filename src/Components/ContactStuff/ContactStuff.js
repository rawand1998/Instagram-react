import Avatar from "@mui/material/Avatar";
import React from "react";
import "./Style.css";
import { useSelector } from "react-redux";

import { selectName, selectPhoto } from "../../features/User/UserSlice";

function ContactStuff() {
  const name = useSelector(selectName);
  const photo = useSelector(selectPhoto);

  const suggestion = [
    {
      id: 1,
      name: "rawand jaradh",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "rbuba hosam",
      img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "mohammmed ",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="contact-conatiner">
      <div className="contact-warrp">
        <div className="contact-user">
          <Avatar src={photo} className="user-img" />
          <span className="username-contact"> {name}</span>
        </div>

        <div className="switch">Switch</div>
      </div>
      <div className="suggestion">
        <div className="suggestion-nav">
          <span className="suggestion-word">Suggentions for you</span>
          <span className="suggestion-seeAll">See All</span>
        </div>
        <div className="suggestion-people">
          {suggestion.map((people) => (
            <div className="suggestion-follow">
              <div className="suggestion-img">
                <img src={people.img} />
                <div className="suggestion-followers">
                  <span>{people.name}</span>
                  <span className="followers">
                    follow by rawandjaradh and +3others
                  </span>
                </div>
              </div>
              <div className="suggestion-follow-div">
                <span className="follow">Follow</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactStuff;
