import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnStatus } from "./ColumnStatus/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalColumnStatus = LocalColumns.find(element => element.field === "Status");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnStatus === undefined === false) {
        ColumnStatus({ inFindColumn: LocalColumnStatus });
    };
};
export { StartFunc };