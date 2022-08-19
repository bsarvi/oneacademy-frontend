import { Button, Divider, Space, Table, Tag } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import AdmissionStop from "../forms/AdmissionStop";
import RestartAdmission from "../forms/RestartAdmission";
const columns = [
  {
    title: "status",
    dataIndex: "admissionStatus",
    key: "admissionStatus",
    fixed: "left",
    width: 70,
    render: (text) => {
      if (!text) {
        return <Tag color="red">InActive</Tag>;
      } else {
        return <Tag color="green">Active</Tag>;
      }
    },
  },
  {
    title: "Course",
    dataIndex: "course",
    key: "course",
    fixed: "left",
    width: 70,
  },
  {
    title: "GENERAL",
    children: [
      { title: "TFW", dataIndex: "genTfw", key: "genTfw", width: 50 },
      { title: "OPEN", dataIndex: "genOpen", key: "genOpen", width: 50 },
      { title: "Pwd", dataIndex: "genPwd", key: "genPwd", width: 50 },
      { title: "FF", dataIndex: "genFf", key: "genFf", width: 40 },
      { title: "GN", dataIndex: "genGn", key: "genGn", width: 40 },
    ],
  },
  {
    title: "OBC",
    children: [
      { title: "OPEN", dataIndex: "obcOpen", key: "obcOpen", width: 50 },
      { title: "PWD", dataIndex: "obcPwd", key: "obcPwd", width: 50 },
      { title: "FF", dataIndex: "obcFf", key: "obcFf", width: 40 },
      { title: "GN", dataIndex: "obcGn", key: "obcGn", width: 40 },
    ],
  },
  {
    title: "ST",
    children: [
      { title: "OPEN", dataIndex: "stOpen", key: "stOpen", width: 50 },
      { title: "PWD", dataIndex: "stPwd", key: "stPwd", width: 50 },
      { title: "FF", dataIndex: "stFf", key: "stFf", width: 40 },
      { title: "GN", dataIndex: "stGn", key: "stGn", width: 40 },
    ],
  },
  {
    title: "OTHER",
    children: [
      { title: "CSP", dataIndex: "otherCsp", key: "otherCsp", width: 50 },
      { title: "NRI", dataIndex: "otherNri", key: "otherNri", width: 50 },
      { title: "SC", dataIndex: "otherSc", key: "otherSc", width: 50 },
      { title: "ESM", dataIndex: "otherEsm", key: "otherEsm", width: 50 },
    ],
  },
  { title: "EWS", dataIndex: "ews", key: "ews", width: 50 },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    fixed: "right",
    width: 70,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    fixed: "right",
    width: 70,
    render: (text, record) => {
      if (record.admissionStatus) {
        return (
          <Space>
            <AdmissionStop id={record.id} getData={submitForm} />
          </Space>
        );
      } else {
        return (
          <Space>
            <RestartAdmission id={record.id} getData={submitForm} />
          </Space>
        );
      }
    },
  },
];
const submitForm = async () => {
  axios
    .get("http://localhost:5001/admin/admission")
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const AdmissionTable = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    submitForm();
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      scroll={{
        x: 1500,
      }}
    />
  );
};

export default AdmissionTable;
