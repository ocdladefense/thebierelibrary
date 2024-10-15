/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";



const $root = document.getElementById("app");
const root = View.createRoot($root);

root.render(<h2 style="color:red; width:80%; margin: 0 auto; padding-top:5%;">No module provided.</h2>);
