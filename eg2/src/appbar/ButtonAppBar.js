import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to={"/"}>TODOS</Link>
          <br />
          <Link to={"/todosbyid"}>TODOS BY ID</Link>
          <br />
          <Link to={"/post"}>POST FORM</Link>
          <br />
          <Link to={"/posts"}>POSTS</Link>
          <br />
          <Link to={"/postdrop"}>POST DROP DOWN</Link>
          <br />
          <Link to={"/todosmui"}>TODOS MUI</Link>
          <br />
          <Link to={"/todosidmui"}>TODOS ID MUI</Link>
          <br />
          <Link to={"/postmui"}>POST MUI</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
