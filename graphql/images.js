import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://redstreetmed.com/graphql",
  cache: new InMemoryCache()
});

const GET_IMAGES = gql`
  {
    mediaItems(where: {nameIn: ["DSC07342", "DSC07333", "DSC0017", "DSC0024"]}) {
      nodes {
        id
        authorId
        date
        title
        url: sourceUrl(size: _2048X2048)
      }
    }
  }
`;

export const getImages = async () => {
  const { data } = await client.query({
    query: GET_IMAGES,
  });
  return data.mediaItems.nodes;
};