import React, { useState, useEffect } from "react";

export const EntriesContext = React.createContext();

// Contentful delivery API
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

const EntriesProvider = (props) => {
  const [entries, setEntries] = useState([]);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const getAll = async (milliseconds = 20) => {
    await sleep(milliseconds);
    client
      .getEntries()
      .then((response) => setEntries(response.items))
      .catch(console.error);
  };

  useEffect(() => {
    getAll(); // eslint-disable-next-line
  }, []);

  return (
    <EntriesContext.Provider value={{ entries }}>
      {props.children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
