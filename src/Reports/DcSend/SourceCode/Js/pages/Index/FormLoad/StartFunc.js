import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
// import { StartFunc as DcCount } from "./DcCount/EntryFile.js";

const StartFunc = async () => {
    StartFuncFromUrlParams();
    // DcCount();
};

export { StartFunc };
