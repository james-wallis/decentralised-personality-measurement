import React, { Component } from 'react';
import { LogoutButton } from '@solid/react'



class Header extends Component {
  render() {
    return (
        <header>
          <div className="header-left"><p>Account: {(this.props.loggedIn)
          ? <a target="_blank" rel="noopener noreferrer" href={this.props.id}>{this.props.id}</a>
            : null}</p></div>
          <div className="header-right"><LogoutButton>Log me out</LogoutButton></div>

          
        </header>
    );
  }
}

export default Header;
