import { createContext, useMemo, useState } from "react";
import { useSessionStorage } from "usehooks-ts";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [token, setToken] = useSessionStorage("Token", "");

  const logout = () => {
    setAuth(null);
    sessionStorage.removeItem("Token");
  };

  const authValue = useMemo(
    () => ({ auth, setAuth, logout, token, setToken }),
    [auth, setAuth, logout, token, setToken]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
