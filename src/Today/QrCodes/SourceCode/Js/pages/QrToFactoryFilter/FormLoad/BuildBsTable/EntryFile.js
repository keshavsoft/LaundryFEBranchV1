import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";


const StartFunc = () => {
    var $table = $('#table');
    ForColumns({ inColumns: optionsJson.columns });
    optionsJson.onClickRow = StartFuncOnClickRowFunc;
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

