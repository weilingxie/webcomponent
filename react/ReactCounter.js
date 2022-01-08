import React, { useState } from "react";
import PropTypes from "prop-types";

const ReactCounter = ({ increaseNumber }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + increaseNumber);
  };
  const decrease = () => {
    setCount((prevCount) => prevCount - increaseNumber);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          increase();
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          decrease();
        }}
      >
        Down
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

ReactCounter.propTypes = {
  increaseNumber: PropTypes.number,
};

// class ReactCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increase = this.increase.bind(this);
//     this.decrease = this.decrease.bind(this);
//     this.reset = this.reset.bind(this);
//   }

//   increase() {
//     this.setState((prevCount) => ({
//       count: prevCount.count + 1,
//     }));
//   }
//   decrease() {
//     this.setState((prevCount) => ({
//       count: prevCount.count - 1,
//     }));
//   }
//   reset() {
//     this.setState({
//       count: 0,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.increase();
//           }}
//         >
//           Up
//         </button>
//         <button
//           onClick={() => {
//             this.decrease();
//           }}
//         >
//           Down
//         </button>
//         <button
//           onClick={() => {
//             this.reset();
//           }}
//         >
//           Reset
//         </button>
//       </div>
//     );
//   }
// }

export default ReactCounter;
