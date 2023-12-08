import { useState } from "react";
import useAuth from "../../hooks/useAuth";
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

export default function UserAuthButton() {
  const { auth, logOutAuth } = useAuth();
  const [toReturn, setToReturn] = useState([]);

  if (!auth?.accessToken) {
    setToReturn([
      <div key={1} className="page__wrapper__navbar__list__item-account">
        <Link
          to="/login"
          className="page__wrapper__navbar__list__item__account__link"
        >
          <i class="fas fa-user page__wrapper__navbar__list__item-account__icon"></i>
        </Link>
      </div>,
    ]);
  } else {
    setToReturn([
      <MDBDropdown className="page__wrapper__navbar__list__item-account">
        <MDBDropdownToggle tag="a" className="nav-link" role="button">
          <i class="fas fa-user-tag page__wrapper__navbar__list__item-account__icon"></i>
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem className="page__wrapper__navbar__list__item-account__dropdown-item">
            <Link
              className="page__wrapper__navbar__list__item-account__dropdown-link"
              to="/prompts"
            >
              Review
            </Link>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>,
    ]);
  }

  return <>{toReturn}</>;
}
