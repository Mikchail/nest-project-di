import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { AppComponent } from "../base";
import {
  // ChevronLeftIcon,
  // ChevronRightIcon
} from "@material-ui/icons"
import { Link } from 'react-router-dom';
interface NavBarPorps { }
interface NavBarState {
  isOpen: boolean;
}


const menuItems = [
  { text: 'Главная', href: '/' },
  { text: 'Список треков', href: '/tracks' },
  { text: 'Список альбомов', href: '/albums' },
]


class NavBar<
  P extends NavBarPorps = NavBarPorps,
  S extends NavBarState = NavBarState,
  > extends AppComponent<P, S> {

  public state: S = {
    ...this.state,
    isOpen: false,
  }

  constructor(props: P) {
    super(props);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
  }

  protected handleDrawerToggle() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
  };

  render() {
    return (
      <div >
        <CssBaseline />
        <AppBar
          position="fixed"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Persistent drawer
                    </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={this.state.isOpen}
        >
          <div>
            <IconButton onClick={this.handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            {menuItems.map(({ text, href }, index) => (
              <ListItem button key={href} onClick={() =>{
                this.router.push(href)
              }}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }






}
export type NavBarType = typeof NavBar;
export default NavBar;