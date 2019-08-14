import { SidebarWithNavbar } from './SidebarWithNavbar';
import {
    SidebarWithNavbarNavbar
} from './../../../layout/components/SidebarWithNavbarNavbar';
import {
    DefaultSidebar
} from './../../../layout/components/DefaultSidebar';

SidebarWithNavbar.Navbar = SidebarWithNavbarNavbar;
SidebarWithNavbar.Sidebar = DefaultSidebar;

export default SidebarWithNavbar;
