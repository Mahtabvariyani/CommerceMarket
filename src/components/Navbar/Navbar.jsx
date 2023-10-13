import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/iconshop.png";
import useStyles from "./styles";
import { Link,useLocation } from "react-router-dom";





function Navbar({ totalItems }) {
    const classes = useStyles();
    const location = useLocation();
    
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/"  variant="h6" color="inherit" className={classes.title}>
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
          <div className={classes.button}>
            {/* <Link to="/cart">
           go to  Cart
            </Link> */}
            <IconButton component={Link} to="/cart" aria-label="Show cart Items" color="inherit">
              <Badge
                badgeContent={totalItems}
                color="secondary"
                overlap="rectangular"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>)}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
