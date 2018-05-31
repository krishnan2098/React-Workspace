class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randIndex = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randIndex]);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Field Cannot be left empty!';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This Option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const subtitle = 'Put your hands in the life of a computer.';
        return (
            <div>
                <Header subtitle={subtitle}/>
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
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
};


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map(option => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}>Remove</button>
        </div>
    );
};

class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.options.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));
    }

    render(){
        return (
            <div>
                { this.state.error && (
                    <p>{this.state.error}</p>
                )}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="options"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));