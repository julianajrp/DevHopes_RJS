import React, { useState } from "react";
import {
  DivCardUser,
  DivInfoRepo,
} from "../../StyledComponents/DivsComponents";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import UserRepo from "./UserRepo";
import { UlRepos } from "../../StyledComponents/DivsComponents";

const UserDetail = () => {
  const { selectedUser } = useContext(UserContext);
  const [repo, setRepo] = useState(false);
  const [repoList, setRepoList] = useState();
  function handleRepo() {
    setRepo(!repo);
    setRepoList(selectedUser.repos);
    console.log(repoList, "repolist");
  }
  useEffect(() => {
    setTimeout(() => {
      setRepoList(selectedUser.repos);
      console.log(repoList, "repolist");
    }, 1000);
  }, [selectedUser]);

  return (
    <DivCardUser>
      <h3 className="FontOld">{selectedUser.real_name}</h3>
      <p className="FontOld">{selectedUser.user_name}</p>
      <p className="FontOld HeadlineItalic Purple">
        {selectedUser.description}
      </p>
      <DivInfoRepo>
        <p className="FontOld HeadlineItalic Purple">ID: {selectedUser.id}</p>
        <p
          className="FontOld HeadlineItalic Purple clicable"
          onClick={handleRepo}
        >
          REPOS: {selectedUser.repos.length}
        </p>
      </DivInfoRepo>
      <>
        {repo ? (
          <UlRepos>
            {repoList.map((repo, createdData) => {
              return <UserRepo key={createdData} repo={repo} />;
            })}
          </UlRepos>
        ) : (
          <></>
        )}
      </>
    </DivCardUser>
  );
};

export default UserDetail;
