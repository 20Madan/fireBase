import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/reshot-icon-hop-GCE47HR9MW.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firbase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser, "CURRENT-USER");

  // const signOutHandler = async()=>{
  // await signOutUser() 
  // setCurrentUser(null);
  // }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <div>Logo</div> */}
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-Link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-Link" to="/auth">
              SIGN-IN
            </Link>
          )}

          <br />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
