import { Switch, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";


export default function index() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
}
