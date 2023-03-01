import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

const link = new HttpLink({
  uri: "/graphql",
});

const uploadLink = createUploadLink({
  uri: `https://api.develop.rivalfantasy.com/profile/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: from([uploadLink, authLink, link]),
  cache: new InMemoryCache(),
});

export default client;
