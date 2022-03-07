import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, GameScreen } from '../components';
import './Game.css';

class Game extends React.Component {
  render() {
    const { location: { state: { name } } } = this.props;
    return (
      <div className="game-screen-content">
        <Header name={ name } />
        <GameScreen onClick={ this.setAnswer } />
      </div>
    );
  }
}

Game.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = ({ game }) => ({
  loading: game.isLoading,
  question: game.question,
});

export default connect(mapStateToProps, null)(Game);
