import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBIcon,
} from "mdb-react-ui-kit";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { colors } from "../../assets/colors";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";

export default function DropdownNav() {
  const classes = useStyles();
  return (
    <MDBDropdown className={classes.foldedListItem}>
      <MDBDropdownToggle
        tag="a"
        className="nav-link"
        style={{ width: "5rem" }}
        role="button"
      >
        <MDBIcon icon="bars" className={classes.foldedNavIcon}></MDBIcon>
      </MDBDropdownToggle>
      <MDBDropdownMenu className={classes.dropdownMenu}>
        <MDBDropdownItem className={classes.dropdownMenuItem}>
          <Link className={classes.dropdownMenuItemLink} to="/">
            HOME
          </Link>
        </MDBDropdownItem>

        <MDBDropdownItem className={classes.dropdownMenuItem}>
          <Link className={classes.dropdownMenuItemLink} to="/">
            ORDER
          </Link>
        </MDBDropdownItem>

        <MDBDropdownItem className={classes.dropdownMenuItem}>
          <Link className={classes.dropdownMenuItemLink} to="/contact">
            CONTACT
          </Link>
        </MDBDropdownItem>
        <MDBDropdownItem className={classes.dropdownMenuItem}>
          <Link className={classes.dropdownMenuItemLink} to="/">
            GALLERY
          </Link>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

const useStyles = createUseStyles({
  foldedListItem: {
    display: "none",
    width: "10rem",
    height: "100%",

    "@media screen and (max-width: 800px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    "@media screen and (min-width: 800px)": {
      display: "none",
    },
  },
  foldedNavIcon: {
    color: colors.nav,
    fontSize: "2rem",
    textShadow: "black 0 0 10px",
    marginTop: "1rem",
  },
  dropdownMenu: {
    backgroundColor: colors.navSemiTransparent,
    borderColor: colors.nav,
  },
  dropdownMenuItem: {
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5rem",
  },
  dropdownMenuItemLink: {
    color: colors.textNav,
  },
});
