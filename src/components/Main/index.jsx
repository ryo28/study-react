import styles from "./Main.module.css";
import { Headline } from "../Headline";
import { Links } from "../Links";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
