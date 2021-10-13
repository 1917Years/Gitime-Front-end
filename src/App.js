import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Mainpage from "./page/Mainpage";
import Todo from "./page/Todo";
import Register from "./page/Register";
import Login from "./page/Login";
import MesPopup from "./page/Mespopup";
import TeamEdit from "./page/TeamEdit";
import TeamForm from "./page/TeamForm";
import Dashboard from "./page/Dashboard";
import Projects from "./page/Projects";
import Oauth from "./page/Oauth";
import Loading from "./page/Loading";
import { getCookie } from "./utils/cookie";
import Header from "./particals/Header";
import "tailwindcss/tailwind.css";
import KakaoOauth from "./utils/KakaoOauth";
import OauthRegister from "./page/OauthRegister";

function App() {
  return (
    <BrowserRouter>
      <Route
        path="*"
        component={(props) => {
          return <Header {...props} />;
        }}
      />
      <Switch>
        <Route
          path="/"
          exact={true}
          component={(props) => {
            return <Mainpage {...props}></Mainpage>;
          }}
        />
        <Route
          path="/register"
          exact={true}
          component={(props) => {
            return <Register {...props}></Register>;
          }}
        />

        <Route
          path="/oauth/register"
          exact={true}
          component={(props) => {
            return <OauthRegister {...props}></OauthRegister>;
          }}
        />

        <Route
          path="/login"
          exact={true}
          component={(props) => {
            return <Login {...props}></Login>;
          }}
        />

        <Route
          path="/auth/github"
          exact={true}
          component={(props) => {
            return <Oauth {...props}></Oauth>;
          }}
        />

        <Route
          path="/auth/kakao"
          exact={true}
          component={(props) => {
            return <KakaoOauth {...props}></KakaoOauth>;
          }}
        />

        <Route
          path="/todo"
          exact={true}
          component={(props) => {
            return <Todo {...props}></Todo>;
          }}
        />
        <Route
          path="/Loading"
          exact={true}
          component={(props) => {
            return <Loading {...props}></Loading>;
          }}
        />

        <Route
          path="/mesPopup"
          exact={true}
          component={(props) => {
            return <MesPopup {...props}></MesPopup>;
          }}
        />

        <Route
          path="/teamForm"
          exact={true}
          component={(props) => {
            return <TeamForm {...props}></TeamForm>;
          }}
        />

        <Route
          path="/teamEdit"
          exact={true}
          component={(props) => {
            return <TeamEdit {...props}></TeamEdit>;
          }}
        />

        <Route
          path="/dashboard"
          exact={true}
          component={(props) => {
            return <Dashboard {...props}></Dashboard>;
          }}
        />
        <Route
          path="/projects"
          exact={true}
          component={(props) => {
            return <Projects {...props}></Projects>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
