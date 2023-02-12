import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RetryLink } from "@apollo/client/link/retry";
import { GET_PROFILE } from "./Profile/getProfile";

let directionalLink = new RetryLink().split(
  operation => operation.getContext().clientName === "auth",
  new HttpLink({ uri: "https://api.develop.rivalfantasy.com/auth/graphql" }),
  new HttpLink({ uri: "https://api.develop.rivalfantasy.com/profile/graphql" })
);

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
  link: authLink.concat(directionalLink),
  cache: new InMemoryCache(),
});



export default client;
