import { StartFunc as StartFuncYesterdayTableId } from "./YesterdayTableId/EntryFile.js";
import { StartFunc as StartFuncThisWeekTableId } from "./ThisWeekTableId/EntryFile.js";
import { StartFunc as StartFuncAllTableId } from "./AllTableId/EntryFile.js";
import { StartFunc as StartFuncToday } from "./TodayTables/EntryFile.js";

const StartFunc = () => {
    StartFuncYesterdayTableId();
    StartFuncThisWeekTableId();
    StartFuncAllTableId();
    StartFuncAllTableId();
    StartFuncToday();
};

export { StartFunc };
