import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://redstreetmed.com/graphql",
  cache: new InMemoryCache()
});

const GET_IMAGES = gql`
  {
    mediaItems(
      where: { nameIn: [
        "DSC07342", "DSC07333", "DSC_0017", "DSC_0024", "DSC_0223-1",
        "DSC_00972"]
      }
      last: 25
    ) {
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

export const getCollections = async () => {
  const GET_COLLECTION = gql`
    {
      contentNodes(where: {contentTypes: POST}) {
        nodes {
          ... on NodeWithTitle {
            collectionName: title
          }
          attachedMedia {
            nodes {
              imageUrl: sourceUrl
              mediaType
            }
          }
          ... on Post {
            featuredImage {
              data: node {
                alt: altText
                imageUrl: sourceUrl
              }
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_COLLECTION,
  });

  return data.contentNodes.nodes;
}
