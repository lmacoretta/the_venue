import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
   return (
      <Drawer
         anchor="right"
         open={props.open}
         onClose={() => props.onClose(false)}
      >
         <List component="nav">
            <ListItem button onClick={() => console.log("Featured")}>
               Event starts in
            </ListItem>
         </List>

         <List component="nav">
            <ListItem button onClick={() => console.log("Venue NFO")}>
               Venue NFO
            </ListItem>
         </List>

         <List component="nav">
            <ListItem button onClick={() => console.log("Highlights")}>
               Highlights
            </ListItem>
         </List>

         <List component="nav">
            <ListItem button onClick={() => console.log("Pricing")}>
               Pricing
            </ListItem>
         </List>

         <List component="nav">
            <ListItem button onClick={() => console.log("Location")}>
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