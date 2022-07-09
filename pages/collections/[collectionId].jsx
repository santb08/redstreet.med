import { getCollection, getCollectionsPaths } from '@graphql/images';
import DefaultTemplate from 'src/components/templates/default';

const CollectionPage = ({
  collection,
  images
}) => {
  return (
    <DefaultTemplate>
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {images.map(image => (
          <img src={image.url} alt={image.alt}></img>
        ))}
      </div>
    </DefaultTemplate>
  );
}

export async function getStaticPaths() {
  const collectionsPaths = await getCollectionsPaths();

  const paths = collectionsPaths.map(path => ({
    params: {
      collectionId: path,
    },
  }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const collection = await getCollection(params.collectionId);
  const images = collection.attachedMedia.nodes.map((node) => ({
    ...node,
  }));

  return {
    props: {
      collection,
      images,
    },
  }
};

export default CollectionPage;
