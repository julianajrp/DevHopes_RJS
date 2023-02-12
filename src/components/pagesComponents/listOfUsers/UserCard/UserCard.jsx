import React from "react";
import {
  DivCardUser,
  DivInfoRepo,
} from "../../../StyledComponents/DivsComponents";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
const UserCard = ({ user }) => {
  const { setShowInfo, setShowRepo } = useContext(UserContext);
  const showInfoSwitch = () => {
    setShowInfo(true);
  };
  const showRepoSwitch = () => {
    setShowRepo(true);
  };
  // const puttingUserInBox = (userOnClick) => {
  //   const verify = user.findIndex((users) => users.id === userOnClick.id);
  //   if (verify !== 0) {
  //     console.log("erroooooooo");
  //   } else {
  //     setUserBox([...userBox, userOnClick]);
  //     console.log(userBox);
  //   }
  // };
  return (
    <DivCardUser>
      <h3 className="FontOld">{user.real_name}</h3>
      <p className="FontOld">{user.user_name}</p>
      <DivInfoRepo>
        <p
          className="clicable FontOld HeadlineItalic Purple"
          onClick={showInfoSwitch}
        >
          info
        </p>
        <p
          className="clicable FontOld HeadlineItalic Purple"
          onClick={showRepoSwitch}
        >
          repos
        </p>
      </DivInfoRepo>
    </DivCardUser>
  );
};

export default UserCard;
