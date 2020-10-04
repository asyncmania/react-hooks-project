import React, { useContext } from "react";
import { StateContext } from "../contexts";

export default function () {
  const { state, dispatch } = useContext(StateContext)
  const { user } = state
  console.log('logut loaded')
  return (
    <form onSubmit={(e) => { e.preventDefault(); dispatch({ type: 'LOGOUT'}) }}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}
