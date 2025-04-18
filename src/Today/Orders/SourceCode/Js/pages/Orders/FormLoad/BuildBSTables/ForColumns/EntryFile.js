import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnTime } from "./ColumnTime/entryFile.js";
import { StartFunc as ColumnItems } from "./ColumnItems/entryFile.js";
import { StartFunc as ColumnSettlement } from "./ColumnSettlement/entryFile.js";
import { StartFunc as ColumnSettle } from "./ColumnSettle/entryFile.js";


let StartFunc = ({ inColumns }) => {
    console.log("chandana",inColumns);
    
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnTime = LocalColumns.find(element => element.field === "OrderData.Currentdateandtime");
    let LocalColumnItems = LocalColumns.find(element => element.field === "AggValues.ItemDetails");
    let LocalColumnSettlement = LocalColumns.find(element => element.field === "AggValues.SettlementAmount");
    let LocalColumnSettle = LocalColumns.find(element => element.field === "IsSettled");
    
    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnTime === undefined === false) {
        ColumnTime({ inFindColumn: LocalColumnTime });
     };
    if (LocalColumnItems === undefined === false) {
        ColumnItems({ inFindColumn: LocalColumnItems });
    };
    if (LocalColumnSettlement === undefined === false) {
        ColumnSettlement({ inFindColumn: LocalColumnSettlement });
    };
    if (LocalColumnSettle === undefined === false) {
        ColumnSettle({ inFindColumn: LocalColumnSettle });
    };
};

export { StartFunc };