import { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const BornContext = createContext();

function BornProvider({ children }) {
  const [bornData, setBornData] = useState([]);
  const [terminalData, setTerminalData] = useState([]);

  const [loadingBorn, setLoadingBorn] = useState(true);
  const [loadingTerminal, setLoadingTerminal] = useState(true);

  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/station`, {
        method: "get",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          return res.json();
        })
        .then((data) => {
          setBornData(data);
          setLoadingBorn(false);
        });
    } catch (err) {
      console.error(err);
      setLoadingBorn(false);
    }
  }, []);

  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/terminal`, {
        method: "get",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
          return res.json();
        })
        .then((data) => {
          setTerminalData(data);
          setLoadingTerminal(false);
        });
    } catch (err) {
      console.error(err);
      setLoadingTerminal(false);
    }
  }, []);

  const bornValue = useMemo(
    () => ({
      bornData,
      loadingBorn,
      terminalData,
      loadingTerminal,
    }),
    [bornData, loadingBorn, terminalData, loadingTerminal]
  );

  return (
    <BornContext.Provider value={bornValue}>{children}</BornContext.Provider>
  );
}

BornProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BornContext, BornProvider };
