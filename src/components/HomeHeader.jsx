/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";

export default function HomeHeader() {

    return (  
        <>
            <div class="hero-image">
                <img src="../images/banner.jpg" class="size-full brightness-50" />
                <div class="overlay-logo"></div>

            </div>


            <section class="callout bg-wb-black tablet:mb-16">
                <div style="font-family:Bitter;font-weight:600;" class="text-center subpixel-antialiased container text-2xl mx-auto tablet-portrait:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto px-8 py-20 font-default-paragraph">
                
                    <h1 class="text-stone-300 text-4xl">The Bière Library<br />Four-year anniversary!</h1>
                    <h2 class="text-stone-300 text-2xl">2020&mdash;2024</h2>
                
                    <span style="font-weight: 400;" class="text-stone-300">Welcome to <strong>The Biere Library!</strong> The Bière Library is a craft beer bar and restaurant serving Corvallis, Oregon. Inspired by the beer and cuisine of Belgium, The Bière Library explores the relationship between beer and food in an environment reminiscent of a comfortable library.</span>
                </div>
            </section>
        </>
    );

}
