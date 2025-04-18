import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.routePath;
    let LocalDcCountTable = UrlJson.DcCountTable;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocalDcCountTable}/AggrFuncs/Count`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

