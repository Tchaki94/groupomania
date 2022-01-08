import React, { useState, useEffect } from "react";
import { Button, Container, Image } from "react-bootstrap";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

const BoardUser = () => {

    const url = "http://localhost:3000/avatars/";
    const [content, setContent] = useState("");
    const [user, setUser] = useState([]);
  
    useEffect(() => {
      UserService.getUserBoard().then(
        (response) => {
          setContent(response.data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
  
          setContent(_content);
  
          if (error.response && error.response.status === 401) {
            EventBus.dispatch("logout");
          }
        }
      );
    }, []);

  
    return (
      <Container className="profile">
        <div className="profile_header">
          <Image
            src={user.image ? url + user.image : "./img/iconprof.png"}
            className="profile_header_avatar"
            roundedCircle
          />
          <h3 className="text-center">
            Bonjour {user.name} <br />
            Que souhaitez-vous faire?
          </h3>
          <a href="/post " className="profile_footer_btn btn btn-secondary">
            Actualiter
          </a>
        </div>
        <hr />
        <div className="profile_footer">
          <a href="/home " className="profile_footer_btn btn btn-secondary">
            Retour
          </a>
        </div>
		</Container>

    );
  };
  
  export default BoardUser;