
import "../css/input.css";


if(MODULE_PATH)
await import(MODULE_PATH + "/src/index.js");

else
await import ("./main.js");

