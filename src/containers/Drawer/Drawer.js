import React, { Component } from "react";
import styles from "./Drawer.module.css";
import { NavLink } from "react-router-dom";

class Drawer extends Component {
  state = {
    notifications: 3
  };
  render() {
    return (
      <div className={styles.Drawer}>
        <NavLink to="/" exact>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="17.042"
            viewBox="0 0 21 17.042"
          >
            <g transform="translate(0.5 -3.5)">
              <path
                d="M19.5,16H4.5a.5.5,0,0,1,0-1h15a.5.5,0,0,1,0,1Z"
                transform="translate(0 3.042)"
              />
              <path
                d="M19.5,11H4.5a.5.5,0,0,1,0-1h15a.5.5,0,0,1,0,1Z"
                transform="translate(0 1.521)"
              />
              <path d="M19.5,6H4.5a.5.5,0,0,1,0-1h15a.5.5,0,0,1,0,1Z" />
              <path d="M1.5,7A1.5,1.5,0,1,1,3,5.5,1.5,1.5,0,0,1,1.5,7Zm0-2a.5.5,0,1,0,.5.5A.5.5,0,0,0,1.5,5Z" />
              <path
                d="M1.5,12A1.5,1.5,0,1,1,3,10.5,1.5,1.5,0,0,1,1.5,12Zm0-2a.5.5,0,1,0,.5.5A.5.5,0,0,0,1.5,10Z"
                transform="translate(0 1.521)"
              />
              <path
                d="M1.5,17A1.5,1.5,0,1,1,3,15.5,1.5,1.5,0,0,1,1.5,17Zm0-2a.5.5,0,1,0,.5.5A.5.5,0,0,0,1.5,15Z"
                transform="translate(0 3.042)"
              />
            </g>
          </svg>
          <span>Posts</span>
        </NavLink>

        <NavLink to="/search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
          >
            <path
              d="M18.869,19.162l-5.943-6.484A7.5,7.5,0,0,0,2.2,2.2,7.5,7.5,0,0,0,7.5,15a7.441,7.441,0,0,0,4.688-1.645l5.943,6.483a.5.5,0,0,0,.738-.675ZM1,7.5A6.5,6.5,0,1,1,7.5,14,6.508,6.508,0,0,1,1,7.5Z"
              transform="translate(-0.001 0)"
            />
          </svg>
          <span>Search</span>
        </NavLink>

        <NavLink to="/contribute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18.999"
            viewBox="0 0 19 18.999"
          >
            <path
              d="M18.172.853a2.831,2.831,0,0,0-4,0L2.041,12.981a.472.472,0,0,0-.11.174l-1.9,5.232a.475.475,0,0,0,.447.637A.484.484,0,0,0,.638,19l5.232-1.9a.485.485,0,0,0,.174-.11L18.172,4.855a2.831,2.831,0,0,0,0-4ZM5.446,16.236,1.271,17.754l1.518-4.175L13.317,3.052l2.657,2.657ZM17.5,4.183l-.852.852L13.989,2.378l.852-.852A1.878,1.878,0,0,1,17.5,4.182Z"
              transform="translate(0 -0.025)"
            />
          </svg>
          <span>Contribute</span>
        </NavLink>

        <NavLink to="/my-posts">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19"><g transform="translate(-2 -1)"><path d="M14.5,18H4.5a.5.5,0,0,1,0-1h10a.5.5,0,0,1,0,1Z" /><path d="M16.5,3a.5.5,0,0,0-.5.5v15a.5.5,0,0,1-.5.5H4.5a1.5,1.5,0,0,1,0-3h9A1.5,1.5,0,0,0,15,14.5V2.5A1.5,1.5,0,0,0,13.5,1H3.5A1.5,1.5,0,0,0,2,2.5v15A2.5,2.5,0,0,0,4.5,20h11A1.5,1.5,0,0,0,17,18.5V3.5A.5.5,0,0,0,16.5,3ZM3.5,2h10a.5.5,0,0,1,.5.5v12a.5.5,0,0,1-.5.5h-9a2.491,2.491,0,0,0-1.5.5V2.5A.5.5,0,0,1,3.5,2Z" /></g></svg>
          <span>My Posts</span>
        </NavLink>

        <NavLink to="/notifications">
          <svg xmlns="http://www.w3.org/2000/svg" width="14.998" height="18.001" viewBox="0 0 14.998 18.001"><path d="M16.8,15.1A4.466,4.466,0,0,1,15,11.5v-3a5.509,5.509,0,0,0-4-5.292V2.5a1.5,1.5,0,1,0-3,0v.708A5.51,5.51,0,0,0,4,8.5v3a4.468,4.468,0,0,1-1.8,3.6.5.5,0,0,0,.3.9H7.05A2.532,2.532,0,0,0,7,16.5a2.5,2.5,0,1,0,5,0,2.539,2.539,0,0,0-.05-.5H16.5a.5.5,0,0,0,.3-.9ZM9,2.5a.5.5,0,0,1,1,0v.523C9.835,3.008,9.669,3,9.5,3s-.335.008-.5.023Zm2,14A1.5,1.5,0,1,1,8.086,16h2.828a1.515,1.515,0,0,1,.086.5ZM3.742,15A5.566,5.566,0,0,0,4.4,14,5.435,5.435,0,0,0,5,11.5v-3a4.5,4.5,0,0,1,9,0v3a5.448,5.448,0,0,0,.6,2.5,5.531,5.531,0,0,0,.659,1H3.741Z" transform="translate(-2 -1)" /></svg>
          <span>Notifications</span>
          <small>{this.state.notifications}</small>
        </NavLink>
      </div>
    );
  }
}

export default Drawer;
