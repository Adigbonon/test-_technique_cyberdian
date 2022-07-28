import React, {useState} from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import SpeedIcon from '@mui/icons-material/Speed';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import styled from "styled-components";
import "react-pro-sidebar/dist/css/styles.css";
import Badge from 'react-bootstrap/Badge';
import {Storefront} from "@mui/icons-material";

const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #434148;
    padding: 10px;
  }
`;

const Badges = styled(Badge)`
  padding: 3px 6px;
  font-size: 9px;
  letter-spacing: 1px;
  border-radius: 15px;
  background-color: #2981a6;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  margin-left: 30px;
  width: 35px;
`;

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const styles = {
        sideBarHeight: {
            height: "100vh"
        },
        menuIcon: {
            float: "right",
            margin: "10px"
        }
    };
    const onClickMenuIcon = () => {
        setCollapsed(!collapsed);
    };

    return (
        <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
            <SidebarHeader>
                <div style={styles.menuIcon} onClick={onClickMenuIcon}>
                    <MenuIcon />
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu>
                    <MenuItem icon={<SpeedIcon />}>
                        Dashboard <Badges>NEW</Badges>
                    </MenuItem>
                </Menu>

                <Menu>
                    <Menuitem icon={<LightbulbIcon />} href="">
                        Le concept
                    </Menuitem>
                </Menu>

                <Menu>
                    <SubMenu title="Nos restaurants" icon={<Storefront />} >
                        <Menuitem>Paris</Menuitem>
                        <Menuitem>Bordeaux</Menuitem>
                        <Menuitem>Lyon</Menuitem>
                        <Menuitem>Rodez</Menuitem>
                    </SubMenu>
                </Menu>


                <Menu>
                    <Menuitem icon={<RestaurantIcon />} href="">
                        Les repas
                    </Menuitem>
                </Menu>

            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>

            </SidebarFooter>
        </ProSidebar>
    );
};

export default Sidebar;