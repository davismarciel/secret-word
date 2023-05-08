import './styled.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para jogar</p>
      <button onClick={startGame}>Começar jogo</button>
    </div>
  );
};

export default StartScreen;