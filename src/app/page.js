'use client';

import { Container, Grid, Typography } from "@mui/material";

import NavBar from "./ui/NavBar";
import Categories from "./ui/Categories/Categories";
import styles from "./page.module.scss";
import Slider from "./ui/Slider/Slider";
import ProductCard from "./ui/Product/ProductCard";
import { products } from "./lib/data";


export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Container className={styles.main}>
        <Categories />
        <div className={styles.divider}></div>
        <Slider />
      </Container>

      <Container className={styles.productsContainer}>
        <Grid
          container
          columns={6}
          spacing={1}
        >
          {
            products.map(
              item => (
                <ProductCard key={item.id} product={item} />
              )
            )
          }
        </Grid>
      </Container>
    </div>
  )
}
