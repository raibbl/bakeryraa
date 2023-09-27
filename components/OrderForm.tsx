import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { Card, CardContent, CardActions, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};

export default function OrderForm(props: {
  //   products: Array<Object>;
  //   style: Object;
  //   onProductItemSelection: Function;
}): JSX.Element {
  return (
    <Card>
      <Grid container columns={2}>
        {/* {AntdForm()} */}
        <Box
          component="form"
          sx={{ m: 1, display: "flex", flexWrap: "wrap" }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              sx={{ m: 1, width: "25ch" }}
              error
              id="outlined-error"
              label="Error"
              defaultValue="Hello World"
            />
            <TextField
              sx={{ m: 1, width: "25ch" }}
              error
              id="outlined-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
            />
          </div>
          <div>
            <TextField
              sx={{ m: 1, width: "25ch" }}
              error
              id="filled-error"
              label="Error"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              sx={{ m: 1, width: "25ch" }}
              error
              id="filled-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="filled"
            />
          </div>
          <div>
            <TextField
              sx={{ m: 1, width: "25ch" }}
              error
              id="standard-error"
              label="Error"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              sx={{ m: 1, width: "25ch" }}
              error
              id="standard-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="standard"
            />
          </div>
        </Box>
        <CardActions style={{ float: "right" }}></CardActions>
      </Grid>
    </Card>
  );

  function AntdForm() {
    return (
      <Grid item direction="column" xs={1}>
        <Grid item direction="column" xs={1}>
          <CardContent>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{ maxWidth: 600 }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "age"]}
                label="Age"
                rules={[{ type: "number", min: 0, max: 99 }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item name={["user", "website"]} label="Website">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "introduction"]} label="Introduction">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </CardContent>
        </Grid>
      </Grid>
    );
  }
}
