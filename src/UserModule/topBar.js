import "./topBar.css";
import { Search, Person, Chat } from "@material-ui/icons";
import { Button } from '@material-ui/core';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/userActions";
import { useNavigate } from 'react-router-dom';


export const Topbar = (name) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.userReducer.user);

  const logout = () => {
    dispatch(userLogout(navigate));
  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <a href="/" style={{ textDecoration: "none" }}>
          <span className="logo">Social Media </span>
        </a>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="logo">{user.name}</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}