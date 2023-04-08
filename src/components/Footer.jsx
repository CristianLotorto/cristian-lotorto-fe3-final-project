import React, { useContext } from 'react'
import { ContextGlobal } from './utils/Provider'

const Footer = () => {

  const {state} = useContext(ContextGlobal);

  const theme= state.isDark ? 'dark-footer' : 'light-footer';

  return (
    <footer className={`${theme}`}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer