import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <div>
          <button>Send</button>
        </div>
      </div>
    </Layout>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
