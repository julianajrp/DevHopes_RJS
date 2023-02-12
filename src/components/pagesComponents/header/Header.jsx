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
  const { setShowHome } = useContext(UserContext);

  function showingHomePage() {
    setShowHome(false);
  }
  function showingUsersPage() {
    setShowHome(true);
  }
  return (
    <DivHeader>
      <DivTitleLogo>
        <h1 className="FontOld LogoTitle">Dev Hopes</h1>
        <img className="ImgLogo" src={purple_logo} alt="" />
      </DivTitleLogo>
      <DivButtons>
        <BtnHeader className="FontOld" onClick={showingHomePage}>
          USERS
        </BtnHeader>
        <BtnHeader className="FontOld" onClick={showingUsersPage}>
          HOME
        </BtnHeader>
      </DivButtons>
    </DivHeader>
  );
};

export default Header;
