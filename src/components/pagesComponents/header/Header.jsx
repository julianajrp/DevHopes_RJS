import React from "react";
import purple_logo from "../../../assets/purple_logo.png";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import { BtnHeader } from "../../StyledComponents/ButtonsComponents";
import {
  DivHeader,
  DivTitleLogo,
  DivButtons,
} from "../../StyledComponents/DivsComponents";
const Header = () => {
  const { setShowHome, setShowInfo, setShowRepo, setShowUsers } =
    useContext(UserContext);

  function showingHomePage() {
    setShowHome(true);
    setShowUsers(false);
    setShowInfo(false);
    setShowRepo(false);
  }
  function showingUsersPage() {
    setShowInfo(false);
    setShowRepo(false);
    setShowHome(false);
    setShowUsers(true);
  }
  return (
    <DivHeader>
      <DivTitleLogo>
        <h1 className="FontOld LogoTitle">Dev Hopes</h1>
        <img className="ImgLogo" src={purple_logo} alt="" />
      </DivTitleLogo>
      <DivButtons>
        <BtnHeader className="FontOld" onClick={showingUsersPage}>
          USERS
        </BtnHeader>
        <BtnHeader className="FontOld" onClick={showingHomePage}>
          HOME
        </BtnHeader>
      </DivButtons>
    </DivHeader>
  );
};

export default Header;
