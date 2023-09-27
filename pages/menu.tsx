import { useMediaQuery } from "@mui/material";
import { CarouselResponsive } from "../components/CarouselResponsive";
import { BakeryName } from "../components/BakeryName";

import { Cairo } from "@next/font/google";
import { Button } from "antd";
import { firestore } from "@/lib/firebase";
import { ProductItems } from "../components/ProductItems";
import OrderReceipt from "@/components/OrderReceipt";
import { useState } from "react";
import { ProductSelected } from "./ProductSelected";
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

export default function Page(props: { products: Array<Object> }) {
  const isMobile = useMediaQuery("(max-width:950px)");
  const { products } = props;
  const [productsSelected, setProductsSelected] = useState<ProductSelected[]>(
    []
  );
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
      <ProductItems
        products={products}
        style={{
          paddingBottom: `${isMobile ? "30" : "60"}px`,
        }}
        onProductItemSelection={(productsSelected: ProductSelected[]) =>
          setProductsSelected(productsSelected)
        }
      />
      <OrderReceipt isMobile={isMobile} productsSelected={productsSelected} />
    </main>
  );
}
