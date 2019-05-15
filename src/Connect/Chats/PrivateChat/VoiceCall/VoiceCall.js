import React, { Component } from "react";
import styles from "./VoiceCall.module.css";
import muteIcon from "../../../../images/ic_mic_off_24px.svg";
import addIcon from "../../../../images/ic_close_24px.svg";
import endIcon from "../../../../images/ic_call_end_24px.svg";

class VoiceCall extends Component {
  state = {
    addCall: false
  };
  handleAddCall = () => {
    this.setState({ addCall: true });
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className={styles.VoiceCall}>
        <div className={styles.header}>
          <svg
            onClick={this.goBack}
            xmlns="http://www.w3.org/2000/svg"
            width="18.501"
            height="12.998"
            viewBox="0 0 18.501 12.998"
            style={{ fill: "white" }}
          >
            <path
              id="arrow-left"
              d="M.646,10.146l6-6a.5.5,0,0,1,.707.707L2.207,10H18.5a.5.5,0,0,1,0,1H2.207l5.146,5.146a.5.5,0,0,1-.708.707l-6-6a.5.5,0,0,1,0-.707Z"
              transform="translate(-0.499 -4)"
            />
          </svg>
          <div>
            <h3>
              Chas McCawley
              {this.state.addCall ? <span>, Kenneth James</span> : null}
            </h3>
            <small>Last Seen 2m ago</small>
          </div>
        </div>
        <div className={styles.contactWrapper}>
          <img
            className={this.state.addCall ? styles.firstCall : null}
            src="http://i.pravatar.cc/200"
            alt=""
          />
          {this.state.addCall ? (
            <img
              className={styles.newCall}
              src="http://i.pravatar.cc/201"
              alt=""
            />
          ) : null}
        </div>
        <div className={styles.controls}>
          <div>
            <button>
              <img src={muteIcon} alt="mute" />
            </button>
            <span>Mute Call</span>
          </div>
          <div onClick={this.handleAddCall}>
            <button>
              <img src={addIcon} alt="add call" />
            </button>
            <span>Add Call</span>
          </div>
          <div onClick={this.goBack}>
            <button>
              <img src={endIcon} alt="end call" />
            </button>
            <span>End Call</span>
          </div>
        </div>
      </div>
    );
  }
}

export default VoiceCall;
