import React from "react";
import Home from "./Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const App = () => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "https://graphql-weather-api.herokuapp.com",
    });
  return (
    <ApolloProvider client={client}>
        <Home />
    </ApolloProvider>
    )
};

export default App;
