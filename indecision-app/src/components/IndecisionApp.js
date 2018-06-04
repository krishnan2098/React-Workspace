import React from "react";
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption: undefined
    };

    clearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined}));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randIndex = Math.floor(Math.random()*this.state.options.length);
        const selectedOption = this.state.options[randIndex];
        this.setState(() => ({ selectedOption }));
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'Field Cannot be left empty!';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This Option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options }));
            }
            console.log('fetching data');
        } catch(e) {
            //Do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("unmounting!");
    }

    render() {
        const subtitle = 'Put your hands in the life of a computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length>0}
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;