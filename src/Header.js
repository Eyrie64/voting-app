import "./Header.css";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import { Link, Route, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <AppsIcon fontSize="Large" />
      <div className="header__logo">
        <div>
          <span>
            <b>PENT</b>
          </span>
          <span>VOTER</span>
        </div>
      </div>
      <AccountCircleIcon fontSize="Large" />
    </nav>
  );
};

export default Header;