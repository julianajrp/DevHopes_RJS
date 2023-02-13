import React from "react";
import { DivUserRepo } from "../../StyledComponents/DivsComponents";

const UserRepo = ({ repo }) => {
  return (
    <DivUserRepo>
      <h3 className="FontOld Title3">{repo.repo_title}</h3>
      <p className="FontOld HeadlineItalic">{repo.repo_desc}</p>
    </DivUserRepo>
  );
};

export default UserRepo;
