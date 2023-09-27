import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductSelected } from "@/pages/ProductSelected";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function OrderReceipt(props: {
  productsSelected: ProductSelected[];
  isMobile: boolean;
}) {
  const { productsSelected, isMobile } = props;
  let total = 0;
  productsSelected.map(
    (productSelected: ProductSelected) =>
      (total += productSelected.amount * productSelected.price)
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: isMobile ? 300 : 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>الفاتورة</TableCell>
            <TableCell align="right">سعر &nbsp;(ريال)</TableCell>
            <TableCell align="right">العدد&nbsp;</TableCell>
            <TableCell align="right">المجموع&nbsp;(ريال)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsSelected.map((productSelected: ProductSelected) => (
            <TableRow
              key={productSelected.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {productSelected.name}
              </TableCell>
              <TableCell align="right">{productSelected.price}</TableCell>
              <TableCell align="right">{productSelected.amount}</TableCell>
              <TableCell align="right">
                {productSelected.amount * productSelected.price}
              </TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
