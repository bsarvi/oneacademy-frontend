import { Button, message } from "antd";
import React from "react";
import axios from "axios";

const RestartAdmission = ({ id, getData }) => {
  const handleSubmit = async (id) => {
    await axios
      .patch("http://localhost:5001/admin/admission/restart/" + id)
      .then((res) => {
        message.success("Admission restarted");
      })
      .catch((err) => {
        message.error("Error In restarting Admission");
        console.log(err);
      });
    getData();
  };
  return <Button onClick={() => handleSubmit(id)}>Restart</Button>;
};

export default RestartAdmission;
