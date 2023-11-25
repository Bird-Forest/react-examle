import React, { useEffect, useRef, useState } from 'react';

export default function Clock() {
  // чтоб при изменении времени не было рендера делфется ленивая инициализация. Если начальное состояние зависит от выражения - надо делать ленивую загрузку, передать функцию, которая возвращает значение
  const [time, setTime] = useState(() => new Date());
  // current свойство useRef , в которое сохраняется значение при первом рендере
  const intervalId = useRef(null);
  console.log(intervalId);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Это интервал каждые 5000ms ' + Date.now());
      setTime(new Date());
    }, 5000);
    return () => {
      console.log('Это функция очистки перед следующим вызовом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <h2>Clock</h2>
      <button type="button" onClick={() => setTime(new Date())}>
        Обновить
      </button>
      <p>Текущее время: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
}

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }
