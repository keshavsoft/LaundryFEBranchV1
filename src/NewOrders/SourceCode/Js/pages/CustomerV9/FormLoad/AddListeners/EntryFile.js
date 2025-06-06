import { StartFunc as StartFuncCustomerNameInputId } from "./CustomerNameInputId/keypress/EntryFile.js";
import { StartFunc as StartFuncNewOrderButtonId } from "./NewOrderButtonId/EntryFile.js";
import { StartFunc as StartFuncCustomerNameSearchButtonId } from "./CustomerNameSearchButtonId/EntryFile.js";
import { StartFunc as StartFuncMasterButtonId } from "./MasterButtonId/EntryFile.js";
import { StartFunc as StartFuncBranchButtonId } from "./BranchNameButton/EntryFile.js";
import { StartFunc as StartFuncNavTabs } from "./NavTabs/EntryFile.js";
import { StartFunc as CustomerRow } from "./CustomerRow/StartFunc.js";
import { StartFunc as ModelSaveAlter } from "./ModelSaveAlter/StartFunc.js";

let StartFunc = () => {
    StartFuncCustomerNameInputId();
    StartFuncNewOrderButtonId();
    StartFuncCustomerNameSearchButtonId();
    StartFuncMasterButtonId();
    StartFuncBranchButtonId();
    StartFuncNavTabs();
    CustomerRow();
    ModelSaveAlter();
};

export { StartFunc }