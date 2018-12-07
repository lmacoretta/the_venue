import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {

   state = {
      sideDrawer: false
   }

   toggleDrawer = (value) => {
      this.setState({
         sideDrawer: value,
         headerShow: false
      });
   }

   componentDidMount() {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 0) {
            this.setState({
               headerShow: true
            })
         } else {
            this.setState({
               headerShow: false
            })
         }
      })
   }


   render() {
      return (
         <AppBar position="fixed" style={{
            background: this.state.headerShow ? '#2f2f2f' : 'transparent',
            boxShadow: 'none',
            padding: '10px 0'
         }}>
            <ToolBar>
               <div className="header_logo">
                  <div className="font_righteous header_logo_venue">The Venue</div>
                  <div className="header_logo_title">Musical Events</div>
               </div>

               <IconButton style={{ color: 'inherit' }}>
                  <MenuIcon onClick={() => this.toggleDrawer(true)} />
               </IconButton>

               <SideDrawer
                  open={this.state.sideDrawer}
                  onClose={(value) => this.toggleDrawer(value)}
               />
            </ToolBar>
         </AppBar>
      );
   }
}

export default Header;