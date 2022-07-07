import { getCollections } from 'graphql/images';
import Gallery from '../src/components/organisms/gallery';
import DefaultTemplate from '../src/components/templates/default';

const mapCollectionsToPreviews = (collections = []) => collections.map(collection => ({
  url: collection.featuredImage.data.imageUrl,
  alt: collection.featuredImage.data.alt,
}));

const Home = ({
  collections
}) => (
  <DefaultTemplate>
    <Gallery images={mapCollectionsToPreviews(collections)}/>
  </DefaultTemplate>
);

export const getStaticProps = async () => {
  const collections = await getCollections();

  return {
    props: {
      collections,
    },
  };
};

export default Home;
