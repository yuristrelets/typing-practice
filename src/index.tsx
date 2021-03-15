import "./index.css";
import "antd/dist/antd.css";
import React from "react";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import ReactDOM from "react-dom";
import Dashboard from "./pages/dashboard";
import { Router } from "@reach/router";
import { LogedInProvider } from "./providers/loged-in-user";
import { protectRoute } from "./components/protect-route";
import { hasAccessToDashboard } from "./entities/route-permissions";

const ProtectedDashboard = protectRoute(Dashboard, hasAccessToDashboard);

ReactDOM.render(
  <React.StrictMode>
    <LogedInProvider>
      <Router>
        <ProtectedDashboard path="/" />
        <Login path="/login" />
        <NotFound default />
      </Router>
    </LogedInProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
