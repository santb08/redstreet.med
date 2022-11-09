import Gallery from '../src/components/organisms/gallery';
import DefaultTemplate from '../src/components/templates/default';
import axios from "axios";
const BASE_URL =
  "https://testnets-api.opensea.io/api/v1/collections?offset=0&limit=300&asset_owner=0x6e4AE7C8d14F93382A92543aa2113c6F18C9F9aa";

const getCollections = async ()=>{
  try {
    const { data } = await axios.get(BASE_URL);
    const images = mapCollectionsToPreviews(data)
    console.log(images);
    return images;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const mapCollectionsToPreviews = (collections = []) => collections.map(collection => ({
  id: collection.slug,
  url: collection.image_url,
  alt: collection.name,
}));

const Home = ({
  collections
}) => (
  <DefaultTemplate>
    <Gallery images={collections}/>
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
