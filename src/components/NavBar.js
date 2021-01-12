import React from 'react';
import {  Link as Navlink} from 'react-router-dom';

function NavBar(props) {
    return (
        <header class="row">
        <div>
          <Navlink class="brand" to="/">Eduardo</Navlink>
        </div>
        <div>
          <Navlink to="/about">About</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </div>
      </header>
    );
}

export default NavBar;