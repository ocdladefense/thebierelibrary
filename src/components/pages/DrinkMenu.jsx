/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import ContentPanel from "@ocdla/global-components/src/ContentPanel";

export default function About() {
    return (
        <>
            <ContentPanel heading="Drinks">
                <p class="font-default-paragraph text-default-paragraph-black font-light subpixel-antialiased text-lg mx-auto laptop:mx-0 laptop:w-full laptop:text-[17px]">
                    The Bière Library features 12 rotating draft beers and a variety of bottles and cans in an assortment of styles. Explore classic Belgian saisons next to new world interpretations, indulge in the best of the Northwest's IPAs, or kick back with a bright, refreshing lager.

Not a beer drinker? There is room at the table for everyone! Cider and wine options are available as well as our rotating cocktails and sipping spirits. We also carry several gluten-free beers.

Interested in non-alcoholic options? We rotate several alcohol-free cocktails using non-alcoholic distillates, as well as several N/A beers, craft sodas, kombucha, coffee, tea, and sparkling waters.

Santé!
                </p>
            </ContentPanel>

        <section class="my-8">
            <div class="title-and-author uppercase p-8 padding-2 font-lato text-6xl text-[rgb(240,173,108)] top-4 left-4">
                <h2>Draft Beer</h2>
            </div>
        <iframe width="100%" height="800" src="https://docs.google.com/document/d/e/2PACX-1vQc0DE00s42-riYN9WSL2DsFWX1AGwAr_JU3I3mQAfCK3Zz_WEA_eSu46Yh6XUKO3a1hRzwxSaGC5jp/pub?embedded=true"></iframe>
</section>


<section class="my-8">
            <div class="title-and-author uppercase p-8 padding-2 font-lato text-6xl text-[rgb(240,173,108)] top-4 left-4">
                <h2>Bottle &amp; Cans</h2>
            </div>
        
        <iframe width="100%" height="800" src="https://docs.google.com/document/d/e/2PACX-1vSNoZK6K-0Hy5mF4UbBceSz9kBWpU8qqrBeRuKVyozL6sJR9Ku_76gUIwbGJl2CVQ0r7ACQo5cW3LVu/pub?embedded=true"></iframe>
</section>


<section class="my-8">
            <div class="title-and-author uppercase p-8 padding-2 font-lato text-6xl text-[rgb(240,173,108)] top-4 left-4">
                <h2>Cocktails, Wine &amp; Non-alcoholic</h2>
            </div>
    
        <iframe width="100%" height="800" src="https://docs.google.com/document/d/e/2PACX-1vQNp99uN6MfhfDbHyzAjwesHlBesbJZVujOoPTC8PgntzTOYwP4QpWVTK5uQQrakEJ8qUXWSrhXpzcF/pub?embedded=true"></iframe>
</section>
        </>
    );
}
