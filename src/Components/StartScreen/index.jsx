import './styled.css';
import PropTypes from 'prop-types';

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para jogar</p>
      <button onClick={startGame}>Começar jogo</button>
    </div>
  );
};

StartScreen.defaultProps = {
  startGame: false,
};

StartScreen.propTypes = {
  startGame: PropTypes.func,
};

export default StartScreen;
