import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";

import SectionCards from "../components/card/section-cards";

import {
  getVideos,
  getPopularVideos,
  getWatchItAgainVideos,
} from "../lib/videos";
import useRedirectUser from "../utils/redirectUser";

export async function getServerSideProps(context) {
  const { userId, token } = await useRedirectUser(context);
  const watchItAgainVideos = await getWatchItAgainVideos(userId, token);

  const videoEditingVideos = await getVideos("video editing");
  const productivityVideos = await getVideos("Productivity");

  const travelVideos = await getVideos("programming");

  const popularVideos = await getPopularVideos();
  return {
    props: {
      videoEditingVideos,
      travelVideos,
      productivityVideos,
      popularVideos,
      watchItAgainVideos
    },
  };
}

export default function Home({
  videoEditingVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
  watchItAgainVideos
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavBar />
        <Banner
          videoId="bV_NdUZEmnE"
          title="DOPAMINE DETOX"
          subTitle="How To Take Back Control Over Your Life"
          imgUrl="/static/banner.webp"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards 
            title="video editing" 
            videos={videoEditingVideos} 
            size="large" 
          />
          <SectionCards
            title="Watch it again"
            videos={watchItAgainVideos}
            size="small"
          />
          <SectionCards 
            title="Travel" 
            videos={travelVideos} 
            size="small" 
          />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards 
            title="Popular" 
            videos={popularVideos} 
            size="small" 
          />
        </div>
      </div>
    </div>
  );
}
