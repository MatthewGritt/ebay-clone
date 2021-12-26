import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Items from "../components/Items";
import List from "../components/List";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ebay-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <List />
        <Banner />
        <Items />
      </main>
    </div>
  );
}
