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
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { Cairo } from "@next/font/google";
import { Button, InputNumber } from "antd";
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
  const [productCounter, setProductCounter] = useState(0);
  return (
    <Card>
      <Grid container columns={2}>
        <Grid item direction="column" xs={1}>
          <CardMedia
            sx={{
              width: "100%",
              height: "200%",
              objectFit: "cover",
            }}
            image={product?.images?.[0]}
            title="green iguana"
          />
        </Grid>
        <Grid item direction="column" xs={1}>
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

      <CardActions disableSpacing style={{ float: "right" }}>
        <InputNumber
          style={{ width: "120px" }}
          value={productCounter}
          onChange={(value) => {
            console.log(value);
            setProductCounter(value);
          }}
          step={1}
          onStep={(value) => {
            console.log(value);
            setProductCounter(productCounter + 1);
          }}
          addonBefore={
            <PlusOutlined
              style={{ marginRight: "4px" }}
              onClick={() => setProductCounter(productCounter + 1)}
            />
          }
          addonAfter={
            <MinusOutlined
              style={{ marginRight: "4px" }}
              onClick={() => setProductCounter(productCounter - 1)}
            />
          }
          defaultValue={0}
        />
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
