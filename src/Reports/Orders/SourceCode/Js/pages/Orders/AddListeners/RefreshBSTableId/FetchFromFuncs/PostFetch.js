import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.url;
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let fromDate = new Date(jFLocalFromDateInputId());
    let toDate = new Date(jFLocalToDateInputId());

    function formatDate(date) {
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    let formattedFromDate = formatDate(fromDate);
    let formattedToDate = formatDate(toDate);

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    console.log(jVarLocalFetchHeaders);
    let jVarLocalFetchUrl = `${LocalroutePath}/${jVarLocalBranchName}/${formattedFromDate}/${formattedToDate}`;
    //let jVarLocalFetchUrl = `/${LocalroutePath}/Transactions/${jVarLocalBranchName}/FilterDataFrombody`;
    let response = await fetch(jVarLocalFetchUrl);
    console.log(response)

    return await response;
};


let jFLocalFromDateInputId = () => {
    let jVarLocalFromDateInputId = 'FromDateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFromDateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalToDateInputId = () => {
    let jVarLocalToDateInputId = 'ToDateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalToDateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};


export { StartFunc };

