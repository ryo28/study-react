import "../styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";
import { useInputArray } from "src/hooks/useInputArray";
function MyApp({ Component, pageProps }) {
  const counter = useCounter();

  const inputArray = useInputArray();

  useBgLightBlue();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}
export default MyApp;
