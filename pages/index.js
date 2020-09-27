import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arvind's website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My experiments with Technology</h1>

        <div className={styles.grid}>
          <Link href="/bus-schedule">
            <a>My Next Bus</a>
          </Link>
          <Link href="/tree-map">
            <a>Tree Map</a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
