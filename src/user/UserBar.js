import React,{ useContext, useState } from "react";
import { StateContext } from "../contexts";

import Login from "./Login";
import Register from "./Register";

export default function UserBar() {

  const { state } = useContext(StateContext) 
  const {user} = state

  const Logout = React.lazy(() => import('./Logout'))

  if (user) {
    console.log(user)
    return <Logout />;
  }else {
    return(
      <React.Fragment>
       <Login  />
       <Register  />
      </React.Fragment>
    )
  }
}
