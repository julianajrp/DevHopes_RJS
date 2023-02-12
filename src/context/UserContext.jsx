import { createContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [listUsers, setListUsers] = useState([]);
  const [listUserRepos, setListUserRepos] = useState([]);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showRepo, setShowRepo] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [userBox, setUserBox] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/api/";

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`${baseUrl}users/`);
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        listUsers,
        setListUsers,
        listUserRepos,
        setListUserRepos,
        baseUrl,
        loading,
        setLoading,
        showHome,
        setShowHome,
        showInfo,
        setShowInfo,
        showRepo,
        setShowRepo,
        userBox,
        setUserBox,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
