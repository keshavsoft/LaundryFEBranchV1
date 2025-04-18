import ConfigJson from '../../../../Config.json' with {type: 'json'};
import CommonConfig from '../../../../../CommonConfig.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalGetStartUrl = CommonConfig.GetStartUrl;
    let jVarLocalGetEndPoint = ConfigJson.GetEndPoint;
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let response = await fetch(`${jVarLocalGetStartUrl}/${jVarLocalGetEndPoint}/${jVarLocalBranchName}`);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };

