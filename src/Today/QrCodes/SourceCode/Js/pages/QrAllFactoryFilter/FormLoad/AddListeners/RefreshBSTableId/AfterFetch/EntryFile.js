import { StartFunc as Status200 } from "./Status200.js";
import { StartFunc as Status500 } from "./Status500.js";

let StartFunc = async (inRes) => {

    if (inRes.status === 200) {
        Status200({ inData: await inRes.json() });
    };
    if (inRes.status === 500) {
        Status500({ inData: await inRes.json() });
    };
}

export { StartFunc };