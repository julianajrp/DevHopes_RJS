import { createContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showRepo, setShowRepo] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
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
        baseUrl,
        loading,
        setLoading,
        showHome,
        setShowHome,
        showInfo,
        setShowInfo,
        showRepo,
        setShowRepo,
        selectedUser,
        setSelectedUser,
        showUsers,
        setShowUsers,
        selectedRepo,
        setSelectedRepo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
