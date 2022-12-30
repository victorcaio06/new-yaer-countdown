import './App.css';

import Title from './components/Title';
import Counter from './components/Counter';
import useCountdown from './hooks/useCountdown';

import ImgNewYear from './assets/newYear.jpg';

function App() {
  const [day, hour, minute, second] = useCountdown('jan 1, 2023 00:00:00');

  const twoDigits = (number) => {
    if (number < 10) {
      return '0' + number;
    } else {
      return number;
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${ImgNewYear})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2023" />
        <div className="countdown-container">
          <Counter title="Dias" number={twoDigits(day)} />
          <p>:</p>
          <Counter title="Horas" number={twoDigits(hour)} />
          <p>:</p>
          <Counter title="Minutos" number={twoDigits(minute)} />
          <p>:</p>
          <Counter title="Segundos" number={twoDigits(second)} />
        </div>
      </div>
    </div>
  );
}

export default App;
