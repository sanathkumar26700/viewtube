import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {DataContextProvider} from "./Context/dataContext"
import {AuthProvider} from "./Context/authContext"
import { UserDataContextProvider } from "./Context/userDataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataContextProvider>
        <UserDataContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </UserDataContextProvider>
        </DataContextProvider>
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
