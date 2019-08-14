# Airframe

High Quality **Dashboard / Admin / Analytics template** that works great on any smartphone, tablet or desktop. Available as **Open Source as MIT license.**

- [View Demo](http://dashboards.webkom.co/jquery/airframe) 
- [React Version](http://dashboards.webkom.co/react/airframe/)
- [Next Version](http://airframe.nextjs.webkom.co) - _Documentation in preparation_ 
- [Angular Version](http://dashboards.webkom.co/angular/airframe) - _Documentation in preparation_
- [Vue Version](http://dashboards.webkom.co/vue/airframe) - _Documentation in preparation_
- [MVC.Net Version](http://dashboards.webkom.co/net-mvc/airframe) - _Documentation in preparation_
- *Sketch Files (Soon)*

![aiframe-2019-light-primary-ExchangeTrading2x-bfc026c1-0477-45c8-ba55-f6dd43141e4c](https://user-images.githubusercontent.com/2330394/63056029-77e91e80-bee7-11e9-92b8-6178fa2691d3.png)

# Introduction

**Airframe Dashboard** with a minimalist design and innovative Light UI will let you build an amazing and powerful application with great UI. Perfectly designed for large scale applications, with detailed step by step documentation.

This **Airframe version** is a standard HTML template using **jQuery** and **Bootstrap 4**. Most of the layouting and components you are able to find in the [Official Bootstrap Documentation](http://getbootstrap.com).

# Features

**Airframe Dashboard** has a huge collection of components that can be used in a great number of combinations and variations. It can be used in all types of custom web applications such as **CRMs**, **CMSs**, **Admin Panels**, **Admin Dashboards**, **Analytics**, etc.

- **10+ Layout Variations** - a multitude of possibilities to rearrange the layout, allows to customize the look of your application just as you imagined.
- **Applications** - applications ready, allows you to save time and focus on project development.
- **UI Components** - we offer you a large number of UI components; fully ready for changes that will customize them for your needs.
- **Responsive Design** - fully adapted to your application, exactly well presented on the desktop, a tablet or smartphone.
- **120+ Unique Pages** designed to make use of them directly in your application.
- **2 Starters** so that you can immediately work with the components that are necessary for your application.

# Author

**Tomasz Owczarczyk:**

- Github: [https://github.com/0wczar](https://github.com/0wczar)
- Dribbble: [https://dribbble.com/tomaszo](https://dribbble.com/tomaszo)
- Linkedin: [https://www.linkedin.com/in/tomaszowczarczyk/](https://www.linkedin.com/in/tomaszowczarczyk/)
- Twitter: [https://twitter.com/towcza](https://twitter.com/towcza)

# Installation

## Additional Components
This Dashboard has some additional classes and JS components to achieve the final effect.

### Layout
This component will keep the whole layout in place it should look like this.
```html
<div class="layout layout--theme--light--primary">
    <div class="layout__sidebar">
    <!-- Optional element: Airframe Sidebar should be placed here -->
    </div>
    <div class="layout__wrap">
        <div class="layout__navbar">
        <!-- Bootstrap Navbars should be placed here, they can be stacked on on another -->
        </div>
        <div class="container>
        <!-- Page Content should be placed here
        </div>
    </div>
</div>
```

The layout component also supports **theming** you can add a specific class related to a particular theme which will add a color scheme to the whole layout (mainly sidebar and targeted navbars). Classes which are providing this feature have this format: `layout--theme--<theme style>--<theme color>`. Here are the possible values for `theme-style` and `theme-color`:

**theme-style**
* `light`
* `dark`
* `color`

**theme-color**
* `primary`
* `success`
* `info`
* `warning`
* `danger`
* `indigo`
* `purple`
* `pink`
* `yellow`

### Sidebar
Sidebar can contain a navigation menu and addtional information. Everything is organized in sections. It can be in a Slim state on larger displays, and collapsible on small screens. Example Sidebar:
```html
<div class="sidebar sidebar--animations--enabled">
    <!-- This element will be displayed only on mobile and will collapse the sidebar when closed -->
    <div class="sidebar__close">
        <a href="javascript:;" class="action--sidebar-trigger">
            <i class="fa fa-times-circle fa-fw"></i>
        </a>
    </div>

    <!-- Sidebar contents are organized in sidebar__section elements -->
    <div class="sidebar__section sidebar__hide-slim">
        <!-- Some non-scrollable content, visible only on non slim sidebar -->
    </div>

    <!-- This wrap will allow scrolling all of the sections inside on Mobile Screens -->
    <div class="sidebar__mobile-fluid">
        <!--
            A fluid section will fill all of the available height in the sidebar,
            cover section will fill all of the available space inside. This combination
            is mainly designed to place SidebarMenu component inside.
        -->
        <div class="sidebar__section sidebar__section--fluid sidebar__section--cover">
            <!-- Sidebar Menu should be placed here -->
        </div>

        <!--
            This section will be at the bottom of the sidebar because
            of the fluid section defined above
        --> 
        <div class="sidebar__section">
            <!-- Sidebar Bottom content -->
        </div>
    </div>
</div>
```

**Notable classes**
* `sidebar--animations--enabled` - will make the sidebar animated in most of the interactions
* `sidebar--slim` - will allow the sidebar to be slim when collapsed on desktop
* `sidebar--collapse` - will hide the sidebar, or make it slim if defined so
* `sidebar__mobile-fluid` - all of the contents of that element will be scrollable on mobile sidebar
* `sidebar__section` - building block of the sidebar
* `sidebar__section--fluid` - section which will fill all available height of the sidebar
* `sidebar__section--cover` - removes the section padding
* `sidebar__hide-slim` - __(helper)__ hides an element when the sidebar goes into slim mode
* `sidebar__show-slim` - __(helper)__ shows an element when the sidebar goes into slim mode

### Sidebar Menu
Provides navigation for the sidebar. Allows for multilevel nesting, may be in a slim form with dropdowns. Has to be placed in a fluid, covered section. Example Sidebar Menu:
```html
<ul class="sidebar-menu">
    <!-- A single link without any nesting -->
    <li class="sidebar-menu__entry">
        <!-- Link to the target page -->
        <a href="/some-page" class="sidebar-menu__entry__link">
            <!-- Icon representing the link -->
            <i class="fa fa-fw fa-th sidebar-menu__entry__icon"></i>
            <!-- Content of the link -->
            <span>Some Page</span>
        </a>
    </li>

    <!-- Container which will have nested entries inside -->
    <li class="sidebar-menu__entry sidebar-menu__entry--nested">
        <!-- Trigger which will expand the child entries on clicking -->
        <a href="javascript:;" class="sidebar-menu__entry__link">
            <!-- Icon representing the trigger -->
            <i class="fa fa-fw fa-home sidebar-menu__entry__icon"></i>
            <!-- Content of the trigger -->
            <span>Dashboards</span>
        </a>

        <!-- Contains the child entries -->
        <ul class="sidebar-submenu">
            <!-- First Child Entry -->
            <li class="sidebar-submenu__entry">
                <a class="sidebar-submenu__entry__link" href="/nested-page-1">
                    <span>First Nested Page</span>
                </a>
            </li>
            <!-- Second Child Entry -->
            <li class="sidebar-submenu__entry">
                <a class="sidebar-submenu__entry__link" href="/nested-page-2">
                    <span>Second Nested Page</span>
                </a>
            </li>
        </ul>
    </li>
</ul>
```
* `sidebar-menu` - parent of the menu
* `sidebar-menu--slim` - should be present when the sidebar is in slim collapsed mode
* `sidebar-menu__entry` - contains the 0 level link
* `sidebar-menu__entry--nested` - contains the 0 level nested links
* `sidebar-menu__entry--no-caret` - removes the caret which is added by nested entries
* `sidebar-menu__link` - level 0 link
* `sidebar-menu__entry__icon` - icon representing a particular entry
* `sidebar-submenu` - contains the nested entries
* `sidebar-submenu__entry` - contains the nth level link
* `sidebar-submenu__entry--nested` - contains the nth level nested links
* `sidebar-submenu__entry__link` - nth level link

### Navbars
Navbars are essentially Bootstraps navbars, but there are some additional classes which extend their behavior.
* `navbar-themed` - will receive the theme colors from the layout theme class
* `navbar-shadow` - will add a shadow at the bottom of the navbar
* `navbar-multi-collapse` - allows to make the navbar collapse, not collapse all of the items, the underling `container` should also have `navbar-collapse-wrap` class

### Additional Helpers
* `sidebar__brand` - will add a theme color to a brand text
* `sidebar__link` - should be used on additional links in sidebar, will add proper themed colors
* `sidebar__link--muted` - muted modifier for the sidebar link
* `text-theme` - will set the text color to the current theme
* `bg-theme` - will set the background color to the current theme

## JavaScript
You can add predefined script which will handle all of the sidebar behaviour: sidebar menu, sidebar collapsing, animations etc.

```html
<head>
    <!-- Those scripts should be loaded with a priority in head -->
    <script src="/assets/js/side-menu.js"></script>
    <script src="/assets/js/layout.js"></script>
</head>
<body>
    <!-- (...) -->
    <div class="layout__sidebar">
        <!-- Sidebar Definition -->
        <!-- (...) -->

        <script>
            Dashboard.Sidebar.init($, window);
        </script>
    </div>
    <!-- (...) -->
    <script>
        Dashboard.Layout.init($, window, document);
    </script>
    <!-- Will provide animations -->
    <script defer src="/assets/js/animate.js"></script>
</body>
```

# Credits
Used plugins in this dashboard:

* [Bootstrap 4.x](http://getbootstrap.com) - Bootstrap is the most popular HTML, CSS, and JS framework
* [Peity 3.3.x](http://benpickles.github.io/peity/) - progressive pie, donut, bar and line charts
* [Font Awesome 4.7.x](http://fontawesome.io/) - Font Awesome, the iconic font and CSS framework.
* [Holder 2.x.x](http://holderjs.com) -  client side image placeholders
* [Highcharts 7.x.x](http://www.highcharts.com/demo) - Interactive JavaScript charts for your web pages.
* [AG Grid 7.x.x](https://github.com/ag-grid/ag-grid) - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components 
