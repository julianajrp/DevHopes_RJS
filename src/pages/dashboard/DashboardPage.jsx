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

const DashboardPage = () => {
  const { showHome } = useContext(UserContext);
  return (
    <DivDashboardAll>
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
    </DivDashboardAll>
  );
};

export default DashboardPage;
