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
import UserRepo from "../usersPage/userRepo/UserRepo";
import UserDetail from "../usersPage/userDetail/UserDetail";
const DashboardPage = () => {
  const { showHome, showRepos, showInfo } = useContext(UserContext);
  return (
    <DivDashboardAll>
      {showRepos ? (
        <UserRepo />
      ) : (
        <>
          {showInfo ? (
            <UserDetail />
          ) : (
            <>
              {showHome ? (
                <DivAllHome>
                  <DivHome>
                    <img className="CatGif" src={catgif} alt="" />
                    <img className="PcGif" src={pcgif} alt="" />
                  </DivHome>
                  <h3 className="FontOld Title2">Bem Vindo!</h3>
                </DivAllHome>
              ) : (
                <ListOfUsers />
              )}
            </>
          )}
        </>
      )}
    </DivDashboardAll>
  );
};

export default DashboardPage;
