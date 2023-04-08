import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './utils/Provider'
import { types } from './utils/Reducer'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal);
  const theme = state.isDark ? 'dark' : 'light'
  const buttonTheme = state.isDark ? 'light' : 'dark'

  return (
    <nav className={`${theme}`}>

      <NavLink to='loader'>Loader</NavLink>
      <NavLink to='home'>Home</NavLink>
      <NavLink to='contact'>Contact</NavLink>
      <NavLink to='favs'>Favs</NavLink>

      <button 
      className={`${buttonTheme}`} 
      onClick={ () => dispatch({type: types.changeTheme})}>
        Change theme
      </button>

    </nav>
  )
}

export default Navbar