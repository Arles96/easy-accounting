import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import {  Button } from "reactstrap";

const Download = () => {
  const data = [
    { firstname: "jill", lastname: "smith", age: 22 },
    { firstname: "david", lastname: "warner", age: 23 },
    { firstname: "nick", lastname: "james", age: 26 }
  ];

  return (
    <Button color="info" size="md">
    <div className="App">
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="test"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
     
    </div>
    </Button>
  );
}
export default Download;