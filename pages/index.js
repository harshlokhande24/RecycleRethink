import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";

const Home = () => {
  return (
    <>
      <Head>
        <title>RecycleRethink</title>
        <meta
          name="description"
          content="RecycleRethink"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        title="Our Vision - A Solution that Works">
        At RecycleRethink, we believe in turning challenges into opportunities. Our vision is simple yet powerful: incentivizing responsible waste disposal. 
        We've created a platform where individuals can exchange their accumulated plastic items for valuable rewards.
      </SectionTitle>
      <Testimonials />
      <Benefits data={benefitOne} />
      <Benefits data={benefitTwo} />
      <Benefits data={benefitThree} />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;