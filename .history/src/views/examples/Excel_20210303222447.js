import React from "react";
import "./styles.css";
import ReactExport from "react-export-excel";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Download = () => {

    const data = [
        { firstname: "jill", lastname: "smith", age: 22 },
        { firstname: "david", lastname: "warner", age: 23 },
        { firstname: "nick", lastname: "james", age: 26 }
    ];

    const camelCase = (str) =>  {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    };

    const filterColumns = (data) => {
        // Get column names
        const columns = Object.keys(data[0]);

        // Remove by key (firstname)
        const filterColsByKey = columns.filter(c => c !== 'firstname');

        // OR use the below line instead of the above if you want to filter by index
        // columns.shift()

        return filterColsByKey // OR return columns
    };

    return (
            <ExcelFile filename="test">
                <ExcelSheet data={data} name="Test">
                    {
                        filterColumns(data).map((col)=> {
                            return <ExcelColumn label={camelCase(col)} value={col}/>
                        })
                    }
                </ExcelSheet>
            </ExcelFile>
    );
}
export default Download;