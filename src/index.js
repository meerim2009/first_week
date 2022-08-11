import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


class Counter extends React.Component {
    state = {
        count: 1000
    }

    onIncrease = () => {
        this.setState((oldState) => {
            return {
                count: oldState.count + 1
            }
        })
    }
    onDecrease = () => {
        this.setState((oldState) => {
            return {
                count: oldState.count - 1
            }
        })
    }

    UNSAFE_componentWillMount() {
        console.log('WILL MOUNT')
    }
    componentDidMount() {
        this.myMount = setInterval(() => {
            console.log('>>>>>>> HELLO ARSENIY')
        }, 2000)
    }
    // shouldComponentUpdate = (newProps, newState) =>{
    //     if (newState.count !== this.state.count) {
    //         return true
    //     }else {
    //         return false
    //     }
    // }

    UNSAFE_componentWillUpdate() {
        console.log('WILL UPDATE')
    }
    componentDidUpdate() {
        console.log('DID UPDATE')
    }

    componentWillUnmount() {
        clearInterval(this.myMount)
    }


    render () {
        console.log('RENDER')
        return (
            <div>
                <p>{this.state.count}</p>
                <input onClick={this.onIncrease} type="button" value='Increase'/>
                <input onClick={this.onDecrease} type="button" value='Decrease'/>
            </div>
        )
    }

}

class App extends React.Component{
    state = {
        showCounter: true
    }
    onToggleCounter = () => {
        this.setState((oldState) => {
            return {
                showCounter: !oldState.showCounter
            }
        })
    }
    render () {
        const content = this.state.showCounter ? <Counter /> : null
        return (
            <div>
                {content}
                <button onClick={this.onToggleCounter}>Reset</button>
            </div>
        )
    }

}



function AutoDec() {
  const [count, setCount] = useState(1000);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {

    setCount(count - 1);
  }, delay);

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  return (
    <>
      <h1>{count}</h1>
      <input value={delay} onChange={handleDelayChange} />
    </>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();


  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);


  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);


