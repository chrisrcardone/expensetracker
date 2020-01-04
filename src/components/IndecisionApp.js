import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';
import { timingSafeEqual } from 'crypto';

class InDecisionApp extends React.Component {
    state={
            options: [],
            selectedOption: undefined
    };
    componentDidMount = () => {

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
    componentDidUpdate = (prevProp, prevState) => {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount = () => {

    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        
        this.setState(() => ({selectedOption: option}));
    }
    handleAddOption = (option) => {
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
    handleClearOption = () => {
        this.setState(() => ({selectedOption: null}));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option;
                })
            }
        });
    }
    render = () => {
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer!'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
                <div className="widget">
                <Options 
                handleDeleteOption={this.handleDeleteOption} 
                key={this.state.options} 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
                </div>
                </div>
                <OptionModal handleClearOption={this.handleClearOption} selectedOption={this.state.selectedOption}/>
            </div>
        )
    }
}

InDecisionApp.defaultProps ={
    options: []
}

export default InDecisionApp;