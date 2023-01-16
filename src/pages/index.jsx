import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";
import { useInputArray } from "src/hooks/useInputArray";

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();

  const { text, array, handelChange, handleAdd } = useInputArray();

  useBgLightBlue();

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>

      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handelChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
