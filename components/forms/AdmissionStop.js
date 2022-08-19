import { Button, message } from "antd";
import React from "react";
import axios from "axios";

const AdmissionStop = ({ id }) => {
  const handleSubmit = async (id, getData) => {
    await axios
      .patch("http://localhost:5001/admin/admission/stop/" + id)
      .then((res) => {
        message.success("Admission Stopped");
      })
      .catch((err) => {
        message.error("Error In Stopping Admission");
        console.log(err);
      });
    getData();
  };
  return <Button onClick={() => handleSubmit(id)}>Stop</Button>;
};

export default AdmissionStop;
