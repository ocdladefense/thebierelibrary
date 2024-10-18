/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import "../../css/ciders.css";
import drink1 from "../../images/drinks/midsummer-nights-bean.webp";
import drink2 from "../../images/drinks/little-house-on-the-puree.webp";
import Drink from "../Drink";

export default function Drinks() {
    return (
        <>





            <div class="title-and-author p-8 padding-2 text-6xl bg-[rgb(115,43,32)] text-[rgb(240,173,108)] top-4 left-4">
                <h2 class="font-lato uppercase leading-16">Cocktails and such</h2>
                <div style="letter-spacing:1.25px;" class="min-h-20 text-[rgb(251,230,179)] p-8  leading-8 text-xl uppercase font-lato container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto font-bold">
                    <div class="container row-span-1 laptop:mx-0">... but also checkout our beers, N/A drinks and the <a href="/drink-menu">complete drink menu</a>.</div>
                </div>
            </div>

            <section style="position:relative;" class="fullscreen bg-default-background laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22">

                <Drink title="Midsummer Night's Bean" src={drink1} description="Crater Lake hazelnut espresso vodka, Kahlua, Bailey’s, cold brew, cardamom." author="The Bière Library" />
                
 
            </section>


            <section style="position:relative;" class="fullscreen bg-default-background laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22">

                <Drink title="Little House on the Pureé" src={drink2} description="Wilderton Lustre N/A Distillate, fruit purée, lime, Club Soda." author="The Bière Library" />
                
 
            </section>




        </>
    );
}
