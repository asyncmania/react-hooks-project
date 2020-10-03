import React, { useContext } from 'react'
import {ThemeContext} from './contexts'



const Header = ({ text }) => {
  const { primaryColor } = useContext(ThemeContext)

  //eslint-disable-next-line react/react-in-jsx-scope
  return <h1 style={{ color: primaryColor }}>{text}</h1>
}


export default Header;