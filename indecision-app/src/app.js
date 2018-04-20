class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your hands in the life of a computer.</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>WHat should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                <p>This is options</p>
            </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));