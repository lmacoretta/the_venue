import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

/**
 * Scroller tiene un metodo que se llama scrollTo, y este tiene props (ver docs).
 * Lo que hace es setear propiedades y desp pasarle a que elemento queremos que vaya.
 */

const SideDrawer = (props) => {

   const scrollToElement = (element) => {
      scroller.scrollTo(element, {
         duration: 1500,
         delay: 100,
         smooth: true,
         offset: -150
      })
      props.onClose(false);
   }

   return (
      <Drawer
         anchor="right"
         open={props.open}
         onClose={() => props.onClose(false)}
      >
         <List component="nav">
            <ListItem button onClick={() => scrollToElement('featured')}>
               Event starts in
            </ListItem>
         </List>

         <List component="nav">
            <ListItem button onClick={() => scrollToElement('venueinfo')}>
               Venue NFO
            </ListItem>
         </List>

         <List component="nav">
            <ListItem button onClick={() => scrollToElement('highlights')}>
               Highlights
            </ListItem>
         </List>

         <List component="nav">
            <ListItem button onClick={() => scrollToElement('pricing')}>
               Pricing
            </ListItem>
         </List>

         <List component="nav">
            <ListItem button onClick={() => scrollToElement('location')}>
               Location
            </ListItem>
         </List>
      </Drawer>
   );
};

export default SideDrawer;

/*
   Drawer va ser el menu que se abre. Va tener un anchor="top" o left o lo que fuere, yo elijo la posicion desde donde quiero que se abra. Una segunda propiedad que es open, que si es true se va mostrar, si es false se va ocultar. Y despues hay una tercera propiedad que se llama onClose que esta va hacer que la segunda propiedad cambie de true o false.
*/