import { Button, message, Select } from "antd";
import React from "react";
import axios from "axios";

const StartAdmissionForm = () => {
  const [value, setValue] = React.useState("");

  const handelSelectChange = (value) => {
    setValue(value);
  };

  const handleSubmit = async () => {
    const response = await axios
      .post("http://localhost:5001/admin/admission/start/" + value)
      .then((res) => {
        message.success(res.data);
      })
      .catch((err) => {
        message.error(err.response.data);
        console.log(err.response.data);
      });
  };

  return (
    <>
      <Select
        name="Course"
        allowClear
        placeholder="Select something"
        size="large"
        dropdownMatchSelectWidth={true}
        onChange={handelSelectChange}
      >
        <Select.Option value="ET">
          Eletronics And Telecomunication Engineering
        </Select.Option>
        <Select.Option value="ME">Mecanical Engineering</Select.Option>
        <Select.Option value="CIV">Civil Engineering</Select.Option>
        <Select.Option value="EE">
          Electrical And Electronics Engineering
        </Select.Option>
        <Select.Option value="CSE">Computer Science Engineering</Select.Option>
        <Select.Option value="IT">
          Information Technology Engineering
        </Select.Option>
      </Select>
      <Button
        type="primary"
        size="large"
        style={{ marginLeft: "10px" }}
        onClick={handleSubmit}
      >
        Start Admission
      </Button>
    </>
  );
};

export default StartAdmissionForm;
