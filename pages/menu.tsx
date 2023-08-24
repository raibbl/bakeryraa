import {
  useMediaQuery,
  Stack,
  styled,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";
import { CarouselResponsive } from "../components/CarouselResponsive";
import { BakeryName } from "../components/BakeryName";
import { Cairo } from "@next/font/google";
import { Button } from "antd";
import { useState } from "react";
import { firestore, storage } from "@/lib/firebase";
const cairoFont = Cairo({ subsets: ["latin"] });

export async function getServerSideProps() {
  const productsRef = await firestore.collection("products");
  const products = (await productsRef.get()).docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
    };
  });

  return {
    props: { products: products },
  };
}

export function FoodItems(props: { products: Array<Object> }): JSX.Element {
  const { products } = props;
  return (
    <Stack spacing={2}>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </Stack>
  );
}
function ProductItem(props: { product: object }): JSX.Element {
  const { product } = props;
  return (
    <Card>
      <Grid container columns={16}>
        <Grid xs={8}>
          <CardMedia
            sx={{ height: 140 }}
            image={product?.images?.[0]}
            title="green iguana"
          />
        </Grid>
        <Grid xs={8}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product?.description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <CardActions style={{ float: "right" }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default function Page(props: { products: Array<Object> }) {
  const isMobile = useMediaQuery("(max-width:950px)");
  const { products } = props;
  return (
    <main>
      <div
        style={{
          alignItems: "center",
          paddingBottom: `${isMobile ? "30" : "60"}px`,
        }}
      >
        <BakeryName isMobile={isMobile} fontClassName={cairoFont.className} />
        <CarouselResponsive isMobile={isMobile} />
        <Button
          ghost
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            verticalAlign: "middle",
            position: "absolute",
            marginLeft: "-50px",
            left: "50%",
            width: "100px",
            height: "50px",
            paddingBottom: "20px",
            bottom: "170px",
          }}
          className={cairoFont.className}
          size="middle"
          onClick={() => {
            console.log("hey");
          }}
        >
          أطلب الأن
        </Button>
      </div>
      <FoodItems products={products} />
    </main>
  );
}
