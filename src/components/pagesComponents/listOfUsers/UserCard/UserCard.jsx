import React from "react";
import {
  DivCardUser,
  DivInfoRepo,
} from "../../../StyledComponents/DivsComponents";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
const UserCard = ({ user }) => {
  const {
    setShowInfo,
    setShowRepo,
    setShowHome,
    setShowUsers,
    setSelectedUser,
    selectedUser,
  } = useContext(UserContext);
  const handleClick = (user) => {
    console.log(selectedUser, "before");
    setSelectedUser(user);
    console.log(selectedUser, "after");
  };
  function check() {
    console.log(selectedUser);
  }

  function showInfoSwitch() {
    setShowUsers(false);
    setShowHome(false);
    setShowRepo(false);
    handleClick(user);
    check();
    setShowInfo(true);
  }
  function showRepoSwitch() {
    setShowUsers(false);
    setShowHome(false);
    setShowInfo(false);
    setShowRepo(true);
    handleClick(user);
    check();
  }

  return (
    <DivCardUser>
      <h3 className="FontOld">{user.real_name}</h3>
      <p className="FontOld">{user.user_name}</p>
      <DivInfoRepo>
        <p
          className="clicable FontOld HeadlineItalic Purple"
          onClick={() => {
            showInfoSwitch();
          }}
        >
          info
        </p>
      </DivInfoRepo>
    </DivCardUser>
  );
};

export default UserCard;
