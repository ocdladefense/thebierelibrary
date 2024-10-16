/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";


export default function TwoColumnPanel({ heading, children, order = "ltr", striped = false }) {
    return (

        <section style="position:relative;" class={`fullscreen bg-sunshine laptop:min-w-[800px] p-8 gap-0 tablet:place-items-start mb-16 tablet:my-22`}>


            <div class="container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto">

                <div class="container row-span-1 laptop:mx-0">
                    <h3 class="subpixel-antialiased mb-8 text-wb-cordovan text-[2rem] content-heading font-marketing">{heading}</h3>
                </div>

                <div class="container-none tablet:grid laptop:container mx-auto h-full tablet:grid-cols-3 gap-6 laptop:gap-8 tablet:grid-flow-row row-span-4">
                    {order == "rtl" ? (
                        <>
                            <div class="subpixel-antialiased col-span-2 justify-self-start">
                                {children[1]}
                            </div>
                            <div class="col-span-1 order-first laptop:order-last laptop:flex laptop:justify-self-end">
                                {children[0]}
                            </div>
                        </>
                    ) : (
                        <>
                            <div class="col-span-1 laptop:flex laptop:justify-self-start">
                                {children[0]}
                            </div>
                            <div class="subpixel-antialiased col-span-2">
                                {children[1]}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
