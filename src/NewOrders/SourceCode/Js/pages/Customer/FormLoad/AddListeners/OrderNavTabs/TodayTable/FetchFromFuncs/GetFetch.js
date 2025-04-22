import ConfigJson from "../../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.Urls.OrderesTabs.TodayUrl;

    let jVarLocalBranchName = localStorage.getItem("BranchName");
    
    let jVarLocalFetchUrl = `/${LocalroutePath}/${jVarLocalBranchName}`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

