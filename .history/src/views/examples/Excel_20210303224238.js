import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import {  Button } from "reactstrap";

const Download = (data) => {

  return (
    <Button color="info" size="md">
    <div className="App">
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="data"
        filename="test"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
    </div>
    </Button>
  );
}
export default Download;