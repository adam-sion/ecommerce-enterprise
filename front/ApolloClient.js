import { ApolloClient, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

export const client = new ApolloClient({
  link: createUploadLink({
    uri: import.meta.env.VITE_JTV_SERVER_URL + "/graphql",
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
