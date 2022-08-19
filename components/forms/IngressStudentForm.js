import { Button, Drawer, message, Space } from "antd";
import { Formik } from "formik";
import {
  Form,
  FormikDebug,
  FormItem,
  Input,
  ResetButton,
  Select,
  SubmitButton,
} from "formik-antd";
import React from "react";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  course: yup.string().required("Course is required"),
  admissionType: yup.string().required("Admission Type is required"),
});

const IngressStudentForm = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleSubmit = async (values, actions) => {
    const response = await axios
      .post("http://localhost:5001/admin/student", values)
      .then((res) => {
        message.success(res.data);
        console.info(values);
        actions.resetForm();
      })
      .catch((err) => {
        message.error(err.response.data);
        console.log(err.response.data);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <>
      <Button type="primary" onClick={toggleDrawer}>
        Ingress Student
      </Button>
      <Drawer
        title="Ingress Student"
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        visible={isDrawerOpen}
        width={500}
      >
        <Formik
          initialValues={{ name: "", email: "", admissionType: "", course: "" }}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
          validationSchema={validationSchema}
        >
          <Form layout="vertical">
            <FormItem name="name" label="Name">
              <Input name="name" />
            </FormItem>
            <FormItem name="email" label="Email">
              <Input name="email" />
            </FormItem>
            <FormItem name="admissionType" label="Admission Type">
              <Select placeholder="Select Admission Type" name="admissionType">
                <Select.Option value="genTfw">GENERAL TFW</Select.Option>
                <Select.Option value="genOpen">GENERAL OPEN</Select.Option>
                <Select.Option value="genPwd">GENERAL PWD</Select.Option>
                <Select.Option value="genFf">GENERAL FF</Select.Option>
                <Select.Option value="genGn">GENERAL GN</Select.Option>
                <Select.Option value="obcOpen">OBC OPEN</Select.Option>
                <Select.Option value="obcPwd">OBC PWD</Select.Option>
                <Select.Option value="obcFf">OBC FF</Select.Option>
                <Select.Option value="obcGn">OBC GN</Select.Option>
                <Select.Option value="stOpen">ST OPEN</Select.Option>
                <Select.Option value="stPwd">ST PWD</Select.Option>
                <Select.Option value="stFf">ST FF</Select.Option>
                <Select.Option value="stGn">ST GN</Select.Option>
                <Select.Option value="otherCsp">OTHER CSP</Select.Option>
                <Select.Option value="otherNri">OTHER NRI</Select.Option>
                <Select.Option value="otherSc">OTHER SC</Select.Option>
                <Select.Option value="otherObc">OTHER OBC</Select.Option>
                <Select.Option value="otherSt">OTHER ST</Select.Option>
                <Select.Option value="ews">EWS</Select.Option>
              </Select>
            </FormItem>
            <FormItem name="course" label="Course">
              <Select placeholder="Select Course" name="course">
                <Select.Option value="IT">Information Technology</Select.Option>
                <Select.Option value="CSE">Computer Science</Select.Option>
                <Select.Option value="ET">
                  Electronics & Telecomunication
                </Select.Option>
                <Select.Option value="ME">Mechanical</Select.Option>
                <Select.Option value="CIV">Civil</Select.Option>
                <Select.Option value="EE">
                  Electrical & Electronics
                </Select.Option>
              </Select>
            </FormItem>
            <Space>
              <SubmitButton>Submit</SubmitButton>
              <ResetButton>Reset</ResetButton>
              <Button onClick={toggleDrawer}>Cancel</Button>
            </Space>
          </Form>
        </Formik>
      </Drawer>
    </>
  );
};

export default IngressStudentForm;
