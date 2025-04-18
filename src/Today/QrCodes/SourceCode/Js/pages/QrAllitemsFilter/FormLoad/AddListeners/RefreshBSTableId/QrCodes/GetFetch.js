import Config from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalBranchName = localStorage.getItem('BranchName');
    let jVarLocalFetchUrl = ` /${Config.GetUrl}/${jVarLocalBranchName}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

export { StartFunc };

