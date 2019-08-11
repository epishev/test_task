import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class CrewMember extends Component {
  render() {
    const { member, onUp, onDown } = this.props;
    const { name } = member;
    return (
      <div data-test="crew-card-container" className="CrewMember-container">
        <div data-test="crew-card-info" className="CrewMember-info">
          <div data-test="crew-card-photo" className="CrewMemeber-photo" style={{ backgroundImage: `url(${member.picture.medium})` }} />
          <div className="CrewMemeber-name">
            <div data-test="crew-card-name">{`${name.first} ${name.last}`}</div>
            <div data-test="crew-card-city">{member.location.city}</div>
          </div>
        </div>
        <div data-test="crew-card-toolbar" className="CrewMember-toolbar">
          {onDown && <button data-test="crew-card-left-button" onClick={onDown} type="button">&lt;</button>}
          {onUp && <button data-test="crew-card-right-button" onClick={onUp} className="CrewMember-up" type="button">&gt;</button>}
        </div>
      </div>
    );
  }
}

CrewMember.defaultProps = {
  member: null,
  onUp: null,
  onDown: null,
};

CrewMember.propTypes = {
  member: PropTypes.object,
  onUp: PropTypes.func,
  onDown: PropTypes.func,
};

export default CrewMember;
