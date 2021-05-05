import React from "react";
import { Switch, Route } from "react-router-dom";
import Aside from "../../../Components/core/aside";
import Main from "../../../Components/core/main";
import Project from "../Project-mangement/Project";
import Team from "../Team-management/Team";
import Ticket from "../Ticket-management/Ticket";
import User from "../User-management/User";
import NoMatch from "../../../Components/NoMatch/NoMatch";
import CoverForm from "../../../Components/cards/CoverCard";

function Home() {
  return (
    <div className="home">
      <Aside />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/project" exact>
          <Project />
        </Route>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/team/create/" exact>
          <CoverForm />
        </Route>
        <Route path="/user" exact>
          <User />
        </Route>
        <Route path="/user/create/" exact>
          <CoverForm />
        </Route>
        <Route path="/ticket" exact>
          <Ticket />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
