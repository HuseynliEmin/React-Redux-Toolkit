import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const BasketDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);


  const products = useSelector((state) => state.basket.products);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div style={{display:"flex",justifyContent:"end",margin:"10px 0"}}>
      <Button variant="contained"  style={{right:"0px"}} onClick={toggleDrawer(true)}>
        Open Basket
      </Button>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 350, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" gutterBottom>
            My Basket
          </Typography>
          <List>
            {products.length > 0 ? (
              products.map((product, index) => (
                <ListItem key={index} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      src={product.image} 
                      alt={product.name}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.name}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          ${product.price} x {product.count}
                        </Typography>
                        <Typography variant="body2">
                          Total: ${product.price * product.count}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))
            ) : (
              <Typography variant="body2">Your basket is empty</Typography>
            )}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default BasketDrawer;
