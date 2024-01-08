import { Container } from "@mui/material";

import NavBar from "./ui/NavBar";
import Categories from "./ui/Categories/Categories";
import styles from "./page.module.scss";
import Slider from "./ui/Slider/Slider";


export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Container className={styles.main}>
        <Categories />
        <div className={styles.divider}></div>
        <Slider />
      </Container>
    </div>
  )
}
