import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Sidebar from "./Sidebar";
import {Avatar, Box, Divider, Drawer, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import USER from "../assets/user";

const Toolbare = styled(Toolbar)`
  display: flex;
  alignItems: center;
  marginTop: theme.spacing.unit;
  justify-content: flex-end;
  padding: 0 8px;
  height: 75px;
`;


function Header() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">

                <Toolbare>

                    <Box sx={{ flexGrow: 0 }} style={{ marginRight: "30px" }}>
                        <Badge badgeContent={4} color="success">
                            <NotificationsActiveIcon color="action" />
                        </Badge>
                    </Box>

                    <Box sx={{ flexGrow: 0 }} style={{ marginRight: "30px" }}>
                        <Badge badgeContent={4} color="error">
                            <MailIcon color="action" />
                        </Badge>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt={USER.login.username} src={USER.picture.medium} />
                        </IconButton>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Typography textAlign="center">{USER.name.title + " " + USER.name.first + " " + USER.name.last} </Typography>

                            <Divider/>

                            <MenuItem>
                                <Typography textAlign="center">Mon compte</Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography textAlign="center">Paramètres</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                    </Box>

                    <Drawer
                        variant="permanent"
                        open={false}
                    >
                        <Sidebar/>
                    </Drawer>
                </Toolbare>
            </Container>
        </AppBar>
    );
};
export default Header;
