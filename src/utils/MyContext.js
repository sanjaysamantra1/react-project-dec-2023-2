import React from "react";

export const myContext = React.createContext({});
                // OR
/* const myContext = React.createContext({});

const UserProvider = myContext.Provider;
const UserConsumer = myContext.Consumer;

export { UserProvider, UserConsumer } */