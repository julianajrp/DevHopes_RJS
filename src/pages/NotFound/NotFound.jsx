import React from "react";
import gifLoop from "../../assets/gifLoop.gif";
import {
  DivImg,
  H1NotFound,
} from "../../components/StyledComponents/NotFoundComponents";

const NotFound = () => {
  return (
    <DivImg>
      <H1NotFound>Página não existe :(</H1NotFound>
      <H1NotFound>mas se divirta com o gif!</H1NotFound>
      <img src={gifLoop} alt="gif loop" />
    </DivImg>
  );
};

export default NotFound;
