import "@/styles/globals.css";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
    <>
        <Head>
          <title>Mini Page Info by Chris</title>
        </Head>
        <Component {...pageProps} />;
    </>
  )
}
