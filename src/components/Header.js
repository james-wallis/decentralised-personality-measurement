import React, { Component } from 'react';
import { AuthButton } from '@solid/react'



class Header extends Component {
  render() {
    return (
        <header>
          <div className="header-left"><p>Account: {(this.props.loggedIn)
          ? <a target="_blank" rel="noopener noreferrer" href={this.props.id}>{this.props.id}</a>
            : null}</p></div>
          <div className="header-right"><AuthButton popup="popup.html" login="Login here!" logout="Log me out" /></div>
        </header>
    );
  }
}

export default Header;
