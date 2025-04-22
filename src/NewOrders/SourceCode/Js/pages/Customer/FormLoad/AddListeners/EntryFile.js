import { StartFunc as StartFuncCustomerNameInputId } from "./CustomerNameInputId/keypress/EntryFile.js";
import { StartFunc as StartFuncNewOrderButtonId } from "./NewOrderButtonId/EntryFile.js";
import { StartFunc as StartFuncMasterButtonId } from "./MasterButtonId/EntryFile.js";
import { StartFunc as StartFuncBranchButtonId } from "./BranchNameButton/EntryFile.js";
import { StartFunc as StartFuncNavTabs } from "./NavTabs/EntryFile.js";
import { StartFunc as CustomerRow } from "./CustomerRow/StartFunc.js";
import { StartFunc as ModelSaveAlter } from "./ModelSaveAlter/StartFunc.js";
import { StartFunc as OrderNavTabs } from "./OrderNavTabs/EntryFile.js";

let StartFunc = () => {
    StartFuncCustomerNameInputId();
    StartFuncNewOrderButtonId();
    StartFuncMasterButtonId();
    StartFuncBranchButtonId();
    StartFuncNavTabs();
    CustomerRow();
    ModelSaveAlter();
    OrderNavTabs()
};

export { StartFunc }