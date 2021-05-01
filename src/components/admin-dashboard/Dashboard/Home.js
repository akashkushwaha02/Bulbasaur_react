import React from "react";
import { Switch, Route } from "react-router-dom";
import Aside from "../Components/core/aside";
import Main from "../Components/core/main";
import Project from "../Project-mangement/project";
import { Team } from "../Team-management/team";
import Ticket from "../Ticket-management/ticket";
import User from "../User-management/user";
import NoMatch from "../Components/NoMatch/NoMatch";

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
        <Route path="/user" exact>
          <User />
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
