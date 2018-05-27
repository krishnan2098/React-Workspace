class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
        this.state = {
            visibilty: false
        };
    }

    handleToggleVisibilty() {
        this.setState((prevState) => {
            visibility: {!prevState.visibilty}
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibilty}> {this.state.visibilty? 'Hide Details' : 'Show Details'} </button>
                { this.state.visibility && (
                    <div>
                        <p>Now visible</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// let visibility = false;
//
// const toggleVisibility = () => {
//     visibility = !visibility;
//     renderApp();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility? 'Hide Details' : 'Show Details'}</button>
//             { visibility && (
//                 <div>
//                 <p>Now it is visible</p>
//                 </div>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// };
//
// renderApp();