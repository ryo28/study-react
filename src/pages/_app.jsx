import "../styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useBgColor } from "src/hooks/useBgColor";
import { useInputArray } from "src/hooks/useInputArray";

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
};
export default MyApp;
