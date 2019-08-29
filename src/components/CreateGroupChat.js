import React, { Component } from "react";
import { connect } from "react-redux";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import { NAME, DESCRIPTION } from "../constants/string";
import "../style/CreateGroupChat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mapStateToProps = state => {};

const mapDispatchToProps = {};

class CreateGroupChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetDisplayed: 1,
      planetTitle: "",
      planetDesc: ""
    };
  }

  handleClickPlanetSelectorBtn = option => {
    let newPlanet = this.state.planetDisplayed + option;
    if (newPlanet === 0) newPlanet = 6;
    if (newPlanet === 7) newPlanet = 1;
    this.setState({
      planetDisplayed: newPlanet
    });
  };

  renderPlanetSelector = () => {
    return (
      <div className="create-groupchat-planet-selector-container">
        <button
          className="create-groupchat-planet-selector-btn"
          onClick={() => this.handleClickPlanetSelectorBtn(-1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img
          src={
            process.env.PUBLIC_URL +
            `/assets/planet0${this.state.planetDisplayed}.png`
          }
        />
        <button
          className="create-groupchat-planet-selector-btn"
          onClick={() => this.handleClickPlanetSelectorBtn(1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="create-groupchat-container">
        {this.renderPlanetSelector()}
        <div className="create-groupchat-input-container">
          <input
            className="create-groupchat-input title"
            type="text"
            placeholder={DESCRIPTION.INPUT_PLACEHOLDER.CREATE_GROUPCHAT_TITLE}
            value={this.state.planetTitle}
            onChange={event =>
              this.setState({ planetTitle: event.target.value })
            }
          />
          <h5 className="create-groupchat-input-textnumber">
            {`${this.state.planetTitle.length}/6`}
          </h5>
        </div>
        <div className="create-groupchat-input-container">
          <input
            className="create-groupchat-input desc"
            type="text"
            placeholder={DESCRIPTION.INPUT_PLACEHOLDER.CREATE_GROUPCHAT_DESC}
            onChange={event =>
              this.setState({ planetDesc: event.target.value })
            }
            value={this.state.planetDesc}
          />
          <h5 className="create-groupchat-input-textnumber">
            {`${this.state.planetDesc.length}/20`}
          </h5>
        </div>
        <input className="create-groupchat-submit" type="submit" value={NAME.BUTTON.CREATE_GROUPCHAT_SUBMIT} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateGroupChat);
