"use cilent";
import styles from "./page.module.css";
import Maincontent from "./components/maincontent/maincontent";

export default function Home() {
  return (
    <div className={styles.page}>
      <Maincontent />
    </div>  
  );
}