import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


function Counter() {
  const [count, setCount] = useState(1000);
  const savedCallback = useRef();

  function callback() {
    setCount(count - 1);
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
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
                <input onClick={this.onIncrease} disabled={true} type="button" value='Increase'/>
                <input onClick={this.onDecrease} disabled={true} type="button" value='Decrease'/>
                <button onClick={this.onToggleCounter}>Reset</button>
                 <p>{this.state.count}</p>
            </div>
        )
    }

}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);



