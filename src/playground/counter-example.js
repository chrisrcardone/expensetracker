class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidUpdate(prevProp, prevState) {
        if (prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json)
            console.log('LS Updated')
        }
    }
    componentDidMount() {
        try {
            const countString = localStorage.getItem('count');
            const count = parseInt(countString, 10);
            if (!isNaN(count)){
            this.setState(() => {
            return {
                count
            }
            })};
        } catch (e) {

        }
    }
    handleAddOne () {
        console.log('Add')
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            };
        });
    };
    handleMinusOne () {
        console.log('Minus')
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }
    handleReset () {
       console.log('Reset')
       this.setState(() => {
           return {
               count: 0
           };
       });
    };
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0

// const addOne = () => {
//     count = count + 1;
//     renderCounterApp();
//     console.log('Add One.')
// };
// const minusOne = () => {
//     if (count > 0) {
//     count = count-1;
//     renderCounterApp();
//     } else {
//         alert('Ignored action due to count being less than 1.')
//     }
//     console.log('Minus One.')
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('Reset.')
// };

// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// );

// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     const appRoot = document.getElementById('app');

//     ReactDOM.render(templateTwo, appRoot);

// }

// renderCounterApp();