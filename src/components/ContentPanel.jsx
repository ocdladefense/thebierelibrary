/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
export default function TwoColumnPanel({ heading, children, striped = false }) {

    return (
        <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>


            <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">
                <div class="container row-span-1 laptop:mx-0">
                    <h3 class="subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-marketing">{heading}</h3>
                </div>
                <div class="laptop:container mb-32 laptop:mb-16 row-span-4">
                    {children}
                </div>
            </div>
        </section>
    )
}
