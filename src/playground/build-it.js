class Builtit extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            visible: false
        }
    }
    handleClick() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
        console.log(this.state.visible)
    };
    render () {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.visible ? 'Hide Content' : 'View Content'}</button>
                {this.state.visible ? <p>Content...</p> : null}
            </div>
        )
    }
}

ReactDOM.render(<Builtit />, document.getElementById('app'));