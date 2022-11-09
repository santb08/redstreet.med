import Head from 'next/head'
import { getImages } from 'web3/opensea';
import OnBoardingTemplate from '../src/components/templates/onboarding';

const Home = ({
  images
}) => (
  <>
    <Head>
      <title>redstreet.med</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <OnBoardingTemplate images={images} />
  </>
);

export async function getStaticProps() {
  const images = await getImages();
  console.log(images)
  return {
    props: {
      images,
    },
  };
}

export default Home;
