class InDecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            options: props.options
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    componentDidMount() {

        try {
            console.log('Component Did Mount')
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options){
            this.setState(() => {
            return {
                options
            }
            })};
        } catch (e) {

        }
    }
    componentDidUpdate(prevProp, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {

    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    };
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add an item.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This is already an option, awkward...'
        }
        /// since there are two returns already, the else is not needed because return would stop the action!
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })

        return undefined
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option;
                })
            }
        });
    }
    render () {
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer!'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
                <Options 
                handleDeleteOption={this.handleDeleteOption} 
                key={this.state.options} 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

InDecisionApp.defaultProps ={
    options: []
}

const Header = (props) => {
        return ( <div>

            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
        )};

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
        return <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do??</button>;
}

const Option = (props) => {
        return (
            <div>
                <p key={props.option}>{props.option} <button onClick={(e) => {props.handleDeleteOption(props.option)}}>remove</button></p>
            </div>
        )
}

const Options = (props) => {
        return <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add some options!</p>}
            {
                props.options.map((option) => {
                    return (
                    <Option 
                    handleDeleteOption={props.handleDeleteOption} 
                    key={option} 
                    option={option} />
                    )
                })
            }
        </div>;
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            error: undefined
        }
    }
    handleSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        if (!error) {
        e.target.elements.option.value = '';
        }

        this.setState(() => {
                return {
                    error
                }});
    }
    render () {
        return <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="option"></input>
            <button>Submit</button>
            </form></div>;
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

ReactDOM.render(<InDecisionApp options={[]}/>, document.getElementById('app'));