import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalBranchName = localStorage.getItem('BranchName');
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

    // let jVarLocalFetchUrl = `/${urlJson.StartRoute}/${jVarLocalBranchName}/Show/DataOnly`;
    let jVarLocalFetchUrl = `/${urlJson.Url}/${jVarLocalBranchName}/${formattedFromDate}/${formattedToDate}`;
    //let jVarLocalFetchUrl = ` /Custom/Clients/Laundry/Orders/Today/WithQrCodes/${jVarLocalBranchName}`;

    let response = await fetch(jVarLocalFetchUrl);

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

