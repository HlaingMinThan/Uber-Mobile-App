import { createContext, useEffect, useState } from "react";
import { getItem, setItem } from "expo-secure-store";
import axios from "@/helpers/axios";
import { router } from "expo-router";
const AuthContext = createContext({
  user: null,
  login: (email: string, password: string) => {},
  logout: () => {},
  getUser: (token: string) => {},
});

const AuthContextProvider = ({ children }: any) => {
  let [user, setUser] = useState(null);

  let getUser = async (token: string) => {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await axios.get("/api/user", config);
      setUser(res.data);
      setItem("token", token);
    } catch (e: any) {
      setItem("token", "");
      setUser(null);
      throw new Error(e);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      let res = await axios.post("/api/login", { email, password });
      setItem("token", res.data.token);
      let userRes = await getUser(res.data.token);
      console.log(userRes);
    } catch (e: any) {
      throw e;
    }
  };

  const logout = () => {
    setUser(null);
    setItem("token", "");
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser(token).then(() => {
        router.replace("/(tab)/home");
      });
    }
  }, []);

  let value: any = { user, login, logout, getUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
