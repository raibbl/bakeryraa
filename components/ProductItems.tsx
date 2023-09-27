import { ProductSelected } from "@/pages/ProductSelected";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";

export function ProductItems(props: {
  products: Array<Object>;
  style: Object;
  onProductItemSelection: Function;
}): JSX.Element {
  const { products, style, onProductItemSelection } = props;
  const [productsSelected, setProductsSelected] = useState<ProductSelected[]>(
    []
  );
  useEffect(() => {
    onProductItemSelection(productsSelected);
  }, [productsSelected]);
  return (
    <Stack style={style} spacing={2}>
      {products.map((product) => (
        <ProductItem
          onProductItemSelection={(productSelected: ProductSelected) => {
            // find index of selected product if it had been selected before
            const existingSelectedProductIndex = productsSelected.findIndex(
              (existingProduct: ProductSelected) =>
                existingProduct.id === productSelected.id
            );
            // if the there is an index that is not -1, update existing selected product
            if (existingSelectedProductIndex >= 0) {
              updateExistingProduct(
                productSelected,
                existingSelectedProductIndex
              );
            } else if (
              // if it is a new product and the amount is not zero
              isNewSelectedProductWithAmount(
                existingSelectedProductIndex,
                productSelected
              )
            ) {
              // add to selected products
              addNewSelectedProduct(productSelected);
            }
          }}
          product={product}
        />
      ))}
    </Stack>
  );

  function isNewSelectedProductWithAmount(
    existingSelectedProductIndex: number,
    productSelected: ProductSelected
  ) {
    return existingSelectedProductIndex == -1 && productSelected.amount > 0;
  }

  function addNewSelectedProduct(productSelected: ProductSelected) {
    let temparray: ProductSelected[] = [...productsSelected];
    temparray.push(productSelected);
    setProductsSelected(temparray);
  }

  function updateExistingProduct(
    productSelected: ProductSelected,
    existingSelectedProductIndex: number
  ) {
    let temparray: ProductSelected[] = [...productsSelected];
    if (productSelected.amount === 0) {
      // if the new amount is 0 then remove the selectedProduct
      temparray.splice(existingSelectedProductIndex, 1);
    } else {
      // just update the product if the amount is non zero
      temparray[existingSelectedProductIndex] = productSelected;
    }
    setProductsSelected(temparray);
  }
}
