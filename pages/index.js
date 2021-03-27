import Head from 'next/head';
import { server } from '../config';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='keywords'
          content='web development, programming, digital marketing, marketing, social media management, e-commerce'
        />
      </Head>

      <Intro />
      <Services />
      <About />
      <Projects projects={projects} />
      <Footer />
    </>
  );
}
