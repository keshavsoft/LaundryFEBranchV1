import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./ShowOnDom/EntryFile.js";

const StartFunc = () => {
    StartFuncFromShowOnDom();
    StartFuncBuildBsTable();
    StartFuncAddListeners();
};

export { StartFunc };
