import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./containers/Login/Login";
import MainPage from "./containers/MainPage/MainPage";
import ResultDetail from "./containers/ResultDetail/ResultDetail";

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem('token') === '12345';
  }
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            isLoggedIn() ? (
              <Redirect to='/result' />
            ) : (
              <Login />
            )
          )}/>
          <Route exact path="/result" render={() => (
            isLoggedIn() ? (
              <MainPage />
            ) : (
              <Redirect to="/"/>
            )
          )}/>
          <Route exact path="/result/:id" render={(props) => (
            isLoggedIn() ? (
              <ResultDetail {...props} />
            ) : (
              <Redirect to="/"/>
            )
          )}/>
          <Redirect to="/result" />
        </Switch>
    </div>
  );
}

export default App;
