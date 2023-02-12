import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import UserCard from "./UserCard/UserCard";
const ListOfUsers = () => {
  const { users } = useContext(UserContext);
  console.log(users);
  return (
    <div>
      {users.map((user, userId) => {
        return <UserCard key={userId} user={user} />;
      })}
    </div>
  );
};

export default ListOfUsers;
