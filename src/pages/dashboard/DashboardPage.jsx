import React from "react";
import { DivDashboardAll } from "../../components/StyledComponents/DivsComponents";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import ListOfUsers from "../../components/pagesComponents/listOfUsers/ListOfUsers";
import pcgif from "../../assets/pcgif.gif";
import catgif from "../../assets/catgif.gif";
import {
  DivHome,
  DivAllHome,
} from "../../components/StyledComponents/DivsComponents";
import UserRepo from "../../components/pagesComponents/UserDetail/UserRepo";
import UserDetail from "../../components/pagesComponents/UserDetail/UserDetail";
const DashboardPage = () => {
  const { showHome, showRepos, showInfo, showUsers } = useContext(UserContext);

  if (showHome && !showUsers && !showRepos && !showInfo) {
    return (
      <DivDashboardAll>
        <DivAllHome>
          <DivHome>
            <img className="CatGif" src={catgif} alt="" />
            <img className="PcGif" src={pcgif} alt="" />
          </DivHome>
          <h3 className="FontOld Title2">Bem Vindo!</h3>
        </DivAllHome>
      </DivDashboardAll>
    );
  } else if (showUsers && !showHome && !showRepos && !showInfo) {
    return (
      <DivDashboardAll>
        <ListOfUsers />
      </DivDashboardAll>
    );
  } else if (showRepos && !showHome && !showUsers && !showInfo) {
    return (
      <DivDashboardAll>
        <UserRepo />
      </DivDashboardAll>
    );
  } else if (showInfo && !showHome && !showRepos && !showUsers) {
    return (
      <DivDashboardAll>
        <UserDetail />
      </DivDashboardAll>
    );
  }
};

export default DashboardPage;
