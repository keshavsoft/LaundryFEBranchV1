import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnSettlement } from "./ColumnSettlement/entryFile.js";
import { StartFunc as ColumnQrCodes } from "./ColumnQrCodes/entryFile.js";
import { StartFunc as ColumnPcs } from "./ColumnPcs/entryFile.js";
import { StartFunc as ColumnTime } from "./ColumnTime/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial")
    let LocalColumnSettlement = LocalColumns.find(element => element.field === "SettlementAmount")
    let LocalColumnQrCodes = LocalColumns.find(element => element.field === "QRRaise")
    let LocalColumnPcs = LocalColumns.find(element => element.field === "ItemDetails")
    let LocalColumnTime = LocalColumns.find(element => element.field === "OrderData.Currentdateandtime")

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnSettlement === undefined === false) {
        ColumnSettlement({ inFindColumn: LocalColumnSettlement });
    };

    if (LocalColumnQrCodes === undefined === false) {
        ColumnQrCodes({ inFindColumn: LocalColumnQrCodes });
    };

    if (LocalColumnPcs === undefined === false) {
        ColumnPcs({ inFindColumn: LocalColumnPcs });
    };

    if (LocalColumnTime === undefined === false) {
        ColumnTime({ inFindColumn: LocalColumnTime });
    };
};

export { StartFunc };