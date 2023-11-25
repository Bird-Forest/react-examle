import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [totalCounter, setTotalCounter] = useState(0);

  const addCounterA = () => {
    setCounterA(prevState => prevState + 1);
  };
  const addCounterB = () => {
    setCounterB(prevState => prevState + 1);
  };

  useEffect(() => {
    setTotalCounter(counterA + counterB);
  }, [counterA, counterB]);
  return (
    <div>
      <h2>Counter</h2>
      <>
        <button
          //   className={styles.btn}
          type="button"
          onClick={addCounterA}
        >
          Кликнули counterA {counterA} раз
        </button>
        <span>{totalCounter}</span>
        <button
          //   className={styles.btn}
          type="button"
          onClick={addCounterB}
        >
          Кликнули counterB {counterB} раз
        </button>
      </>
    </div>
  );
}

// class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

// componentDidMount() {
//   const { counterA, counterB } = this.state;
//   const totalClicks = counterA + counterB;

//   document.title = `Всего кликнули ${totalClicks} раз`;
// }

// componentDidUpdate(prevProps, prevState) {
//   const { counterA, counterB } = this.state;

//   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//     const totalClicks = counterA + counterB;

//     document.title = `Всего кликнули ${totalClicks} раз`;
//   }
// }

//   render() {
//     return (
//       <>
//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Кликнули counterA {this.state.counterA} раз
//         </button>

//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Кликнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }
