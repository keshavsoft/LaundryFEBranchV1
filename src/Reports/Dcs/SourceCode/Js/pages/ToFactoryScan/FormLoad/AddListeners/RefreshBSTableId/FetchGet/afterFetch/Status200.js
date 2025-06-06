let StartFunc = ({ inResponseAsJson }) => {
    const jVarLocalResponseAsJson = inResponseAsJson;
    
    var $table = $('#table');
    // let jVarLocalSortByDate = jFLocalSortByDate({ inResponseAsJson: jVarLocalResponseAsJson });
    // let jVarLocalSortByAccountName = jVarLocalSortByDate.sort((a, b) => a.value - b.value);

    $table.bootstrapTable("load", jVarLocalResponseAsJson);
};

const jFLocalSortByDate = ({ inResponseAsJson }) => {
    const jVarLocalResponseAsJson = inResponseAsJson;

    return jVarLocalResponseAsJson.sort((a, b) => {
        const nameA = a.Date; // ignore upper and lowercase
        const nameB = b.Date; // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
};

export { StartFunc };