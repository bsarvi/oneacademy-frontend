import { Col, Divider, message, Row, Space } from "antd";
import { Formik } from "formik";
import {
  DatePicker,
  FormikDebug,
  FormItem,
  Form,
  Input,
  InputNumber,
  ResetButton,
  Select,
  SubmitButton,
} from "formik-antd";
import React from "react";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  contactNumber: yup.string().required("Contact Number is required"),
  caste: yup.string().required("Caste is required"),
  dob: yup.date().required("Date of Birth is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  pincode: yup.number().required("Pincode is required"),
  gender: yup.string().required("gender is required"),
  board: yup.string().required("Board is required"),
  hsscSeatNumber: yup.number().required("HSSC Seat Number is required"),
  passingYear: yup.string().required("Passing Date is required"),
  engMksHssc: yup.number().required("English Marks is required"),
  mathsMksHssc: yup.number().required("Maths Marks is required"),
  phyMksHssc: yup.number().required("Physics Marks is required"),
  chemMksHssc: yup.number().required("Chemistry Marks is required"),
  otherMksHssc: yup.number().required("Other Marks is required"),
  bioMksHssc: yup.number().required("Biology Marks is required"),
  gcetRollNumber: yup.number().required("GCET Roll Number is required"),
  mathsMksGcet: yup.string().required("Maths Marks is required"),
  chemMksGcet: yup.number().required("Chemistry Marks is required"),
  phyMksGcet: yup.number().required("Physics Marks is required"),
  neetRollNumber: yup.number().required("NEET Roll Number is required"),
  neetscore: yup.number().required("NEET Score is required"),
  airRank: yup.number().required("AIR Rank is required"),
});

const AdmissionDetailForm = () => {
  const handleSubmit = (values) => {
    message.success(`${JSON.stringify(values)}`);
    console.log(values);
  };

  return (
    <>
      <Divider>New Admission Form</Divider>
      <Formik
        initialValues={{
          name: "",
          email: "",
          contactNumber: "",
          caste: "",
          dob: "",
          address: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
          gender: "",
          board: "",
          hsscSeatNumber: "",
          passingYear: "",
          engMksHssc: "",
          mathsMksHssc: "",
          phyMksHssc: "",
          chemMksHssc: "",
          otherMksHssc: "",
          bioMksHssc: "",
          gcetRollNumber: "",
          mathsMksGcet: "",
          chemMksGcet: "",
          phyMksGcet: "",
          neetRollNumber: "",
          neetscore: "",
          airRank: "",
        }}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
        validationSchema={validationSchema}
      >
        <Form layout="vertical">
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            justify="space-around"
            align="top"
          >
            <Col span={4}>
              <FormItem name="name" label="Name">
                <Input name="name" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem name="email" label="Email">
                <Input name="email" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem name="contactNumber" label="Contact Number">
                <Input name="contactNumber" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem name="dob" label="DOB">
                <DatePicker name="dob" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem name="caste" label="Caste">
                <Select placeholder="Select Caste" name="caste">
                  <Select.Option value="GENERAL">General</Select.Option>
                  <Select.Option value="SC">SC</Select.Option>
                  <Select.Option value="ST">ST</Select.Option>
                  <Select.Option value="OBC">OBC</Select.Option>
                </Select>
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem name="gender" label="Gender">
                <Select placeholder="Slect Gender" name="gender">
                  <Select.Option value="MALE">MALE</Select.Option>
                  <Select.Option value="FEMALE">FEMALE</Select.Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Divider orientation="left">Address</Divider>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            justify="space-around"
            align="top"
          >
            <Col span={4}>
              <FormItem name="address" label="Address">
                <Input name="address" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem name="city" label="City">
                <Input name="city" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem name="state" label="State">
                <Input name="state" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem name="country" label="Country">
                <Input name="country" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem name="pincode" label="Pincode">
                <Input name="pincode" />
              </FormItem>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            justify="space-around"
            align="top"
          >
            <Col span={12}>
              <Divider orientation="left">HSSC Details</Divider>
              <Row>
                <Col span={8}>
                  <FormItem name="board" label="Board">
                    <Input name="board" />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem name="hsscSeatNumber" label="Seat Number">
                    <Input name="hsscSeatNumber" />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem name="passingYear" label="Passing Year">
                    <DatePicker name="passingYear" picker="year" />
                  </FormItem>
                </Col>
              </Row>
              <Divider style={{ marginBottom: "30px" }} />
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                justify="space-around"
                align="top"
              >
                <Col span={4}>
                  <FormItem name="engMksHssc" label="English">
                    <InputNumber name="engMksHssc" />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem name="mathsMksHssc" label="Mathematics">
                    <InputNumber name="mathsMksHssc" />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem name="phyMksHssc" label="Physics">
                    <InputNumber name="phyMksHssc" />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem name="chemMksHssc" label="Chemistry">
                    <InputNumber name="chemMksHssc" />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem name="otherMksHssc" label="Others">
                    <InputNumber name="otherMksHssc" />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem name="bioMksHssc" label="Biology">
                    <InputNumber name="bioMksHssc" />
                  </FormItem>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Divider orientation="left">GCET Details</Divider>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                justify="space-around"
                align="top"
              >
                <Col span={12}>
                  <FormItem name="gcetRollNumber" label="Roll Number">
                    <Input name="gcetRollNumber" />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem name="mathsMksGcet" label="Mathematics">
                    <InputNumber name="mathsMksGcet" />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem name="chemMksGcet" label="Chemistry">
                    <InputNumber name="chemMksGcet" />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem name="phyMksGcet" label="Physics">
                    <InputNumber name="phyMksGcet" />
                  </FormItem>
                </Col>
              </Row>
              <Divider orientation="left">NEET Details</Divider>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                justify="space-around"
                align="top"
              >
                <Col span={8}>
                  <FormItem name="neetRollNumber" label="Roll Number">
                    <Input name="neetRollNumber" />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem name="neetscore" label="NEET Score">
                    <InputNumber name="neetscore" />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem name="airRank" label="AIR Rank">
                    <InputNumber name="airRank" />
                  </FormItem>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />

          <Space>
            <SubmitButton>Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </Space>
        </Form>
      </Formik>
    </>
  );
};

export default AdmissionDetailForm;
