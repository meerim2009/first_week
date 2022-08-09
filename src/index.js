import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        count: 0
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
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


