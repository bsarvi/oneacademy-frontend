import React from "react";
import IngressStudentForm from "../../../components/forms/IngressStudentForm";
import StartAdmissionForm from "../../../components/forms/StartAdmissionForm";
import AdmissionTable from "../../../components/table/AdmissionTable";

const index = () => {
  return (
    <>
      <IngressStudentForm />
      <StartAdmissionForm />
      <AdmissionTable />
    </>
  );
};

export default index;
