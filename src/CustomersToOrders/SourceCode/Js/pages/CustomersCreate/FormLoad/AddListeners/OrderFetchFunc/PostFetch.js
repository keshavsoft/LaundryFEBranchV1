import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJSON from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `${ConfigJSON.PostFetch}/${jVarLocalBranchName}`;
    
    let response = await fetch(jVarLocalFetchUrl,jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

