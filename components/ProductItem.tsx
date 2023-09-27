import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";
import { PlusOutlined, MinusOutlined, DollarOutlined } from "@ant-design/icons";
import { InputNumber } from "antd";
import { useState, useEffect } from "react";

export function ProductItem(props: {
  product: object;
  onProductItemSelection: Function;
}): JSX.Element {
  const { product, onProductItemSelection } = props;
  const [productCounter, setProductCounter] = useState(0);
  useEffect(() => {
    onProductItemSelection({ ...product, amount: productCounter });
  }, [productCounter]);
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
            <Typography variant="body٣" color="text.secondary">
              {product?.description}
            </Typography>
            <div style={{ paddingTop: 10, display: "flex" }}>
              <Typography
                sx={{ paddingRight: 1 }}
                variant="subtitle4"
                color="text.secondary"
                component="div"
              >
                {product?.price}&nbsp;(ريال)
              </Typography>
              <DollarOutlined />
            </div>
          </CardContent>
        </Grid>
      </Grid>

      <CardActions style={{ float: "right" }}>
        <InputNumber
          style={{ width: "120px" }}
          value={productCounter}
          onChange={(value) => {
            console.log(value);
            setProductCounter(value);
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
              onClick={() =>
                setProductCounter(
                  productCounter - 1 >= 0 ? productCounter - 1 : 0
                )
              }
            />
          }
          defaultValue={0}
        />
      </CardActions>
    </Card>
  );
}
