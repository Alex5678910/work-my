import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import UseInputMain from "./Components/useInput/useInputMain";
import Hover from "./Components/useHover/Hover";
import List from "./Components/useTodos/List";
import TicTacToe from "./Components/tic-tac-toe/tic-tac-toe";
import Antd from "./Components/antd-library/main";
import ProxyState from "./Components/HOC";
import Moment from "./Components/moment/moment";
import TodoApp from './Components/redux-todo/TodoApp'

function App() {
    return (
        <div className="App">
            <ProxyState>
                {() => 10 + 'HELLO'}
            </ProxyState>
            <Link to="/use-input-main">Первый хук</Link>
            <Link to="/use-hover">Второй хук</Link>
            <Link to="/todo">Третий хук</Link>
            <Link to="/tic-tac-toe">Крестики нолики</Link>
            <Link to="/antd">antd-library</Link>
            <Link to="/moment">moment</Link>
            <Link to="/tododo">Список дел</Link>
            <Switch>
                <Route exact path="/use-input-main" component={UseInputMain}/>
                <Route exact path="/use-hover" component={Hover}/>
                <Route exact path="/todo" component={List}/>
                <Route exact path="/tic-tac-toe" component={TicTacToe}/>
                <Route exact path="/antd" component={Antd}/>
                <Route exact path="/moment" component={Moment}/>
                <Route exact path="/tododo" component={TodoApp}/>
            </Switch>
        </div>
    );
}

export default App;
