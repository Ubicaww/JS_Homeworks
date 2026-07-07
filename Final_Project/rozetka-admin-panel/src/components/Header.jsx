import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

import logoWhite from "../assets/logo-white.svg";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#00a046", boxShadow: "none", }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component="img"
          src={logoWhite}
          alt="Rozetka"
          sx={{ height: 40, cursor: "pointer", }}
          onClick={() => navigate("/products")}
        />

        <IconButton
          color="inherit"
          onClick={handleLogout}
          title="Вийти"
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
