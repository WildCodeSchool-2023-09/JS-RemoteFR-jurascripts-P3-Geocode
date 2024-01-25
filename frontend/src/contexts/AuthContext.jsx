import { createContext, useMemo } from "react";
import { useSessionStorage } from "usehooks-ts";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useSessionStorage("Token", "");

  const logout = () => {
    sessionStorage.removeItem("Token");
    window.location.reload();
  };

  //

  const authValue = useMemo(
    () => ({ logout, token, setToken }),
    [logout, token, setToken]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
