import React from 'react';
import NavBar from './Nav';
import '../styles/Header.css';

const Header = ({setPage}) => {

return (<header id='mainHead'><NavBar setPage={setPage}/></header>)

}

export default Header;