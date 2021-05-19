import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../Components/core/main";
import Project from "../Features/Admin/Project-mangement";
import Team from "../Features/Admin/Team-management";
import Ticket from "../Features/Admin/Ticket-management";
import User from "../Features/Admin/User-management";
import NoMatch from "../Components/NoMatch/NoMatch";
import UserCreateForm from "../Components/FormView/UserCreateForm";
import TeamCreateForm from "../Components/FormView/TeamCreateForm";
import ProjectCreateForm from "../Components/FormView/ProjectCreateForm";
import TicketCreateForm from "../Components/FormView/TicketCreateForm";
import Profile from "../Components/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/project" exact>
        <Project />
      </Route>
      <Route path="/project/create/" exact>
        <ProjectCreateForm />
      </Route>
      <Route path="/team" exact>
        <Team />
      </Route>
      <Route path="/team/create/" exact>
        <TeamCreateForm />
      </Route>
      <Route path="/user" exact>
        <User />
      </Route>
      <Route path="/user/create/" exact>
        <UserCreateForm />
      </Route>
      <Route path="/ticket" exact>
        <Ticket />
      </Route>
      <Route path="/ticket/create/" exact>
        <TicketCreateForm />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;
