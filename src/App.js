import './App.css';
import Enter from "./components/enter";
import {WindowType} from "./state/consts";

function App(props) {
    let state = props.state;
    let telegram = state.telegram;
    return (
        <div className="App">
            {
                props.state.config.windowType === WindowType.Enter && (<Enter telegram={telegram}/>)
            }
        </div>
    );
}

export default App;
