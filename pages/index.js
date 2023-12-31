import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Presentation Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <Link href="/frontend_tut_LukeF.html">Web3 Starter Presentation</Link>
      </main>

      <Footer />
    </div>
  );
}
