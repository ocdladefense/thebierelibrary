/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Navigation from "./navigation/Navigation";



export default function Header() {
    return (
        <header class="w-full mb-0 pb-1 p-[10px] sticky top-0 bg-wb-black z-50">
            <img src="/src/images/hand-on-mug.png" alt="Wandering Bard logo" class="w-12 h-12" />
            <Navigation />
        </header>
    );
}
