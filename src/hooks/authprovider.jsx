import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./uselocalstorage";
const AuthContext = createContext();

export function AuthProvider({ children }){
  const [userId, setUserId] = useLocalStorage("userId", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  async function login(data) {
    setUserId(data);
    navigate("/profile");
  };

  // call this function to sign out logged in user
  async function logout() {
    setUserId(null);
    navigate("/signin", { replace: true });
  };

  function loggedIn() {
    return userId != undefined;
  }

  const value = useMemo(
    () => ({
      userId,
      login,
      logout,
      loggedIn
    }),
    [userId]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
};
