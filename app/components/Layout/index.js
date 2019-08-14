import { Layout } from './Layout';
import { LayoutContent } from './LayoutContent';
import { LayoutNavbar } from './LayoutNavbar';
import { LayoutSidebar } from './LayoutSidebar';
import { withPageConfig } from './withPageConfig';
import { setupPage } from './setupPage';
import { PageConfigContext } from './PageConfigContext';

Layout.Sidebar = LayoutSidebar;
Layout.Navbar = LayoutNavbar;
Layout.Content = LayoutContent;

const PageConfigProvider = PageConfigContext.Provider;
const PageConfigConsumer = PageConfigContext.Consumer;

export default Layout;
export { withPageConfig, setupPage, PageConfigProvider, PageConfigConsumer };
