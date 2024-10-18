/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";


export default function Drink({src,title,description,author,bgcolor}) {

return (

    <div style="position:relative;" class={`fullscreen rounded-t-md  bg-crater-lake-green laptop:min-w-[800px] gap-0 tablet:place-items-start mb-16 tablet:my-22`}>

        <div class="title-and-author p-8 padding-2 text-6xl text-[rgb(240,173,108)] top-4 left-4">
            <h2 style="font-family: 'Nanum Pen Script';" >{title}</h2>
            <h3 style="font-family: Lato; font-weight:bold; letter-spacing:0.9px;" class="font-black text-base">by {author}</h3>                
        </div>
        <img src={src} class="object-cover mx-auto" />
        
        <div style="letter-spacing:1.25px;" class="min-h-20 text-[rgb(251,230,179)] p-8  leading-8 text-xl uppercase font-lato container tablet:max-w-[90%] laptop:max-w-[80%] tablet:mx-auto font-bold">
            <div class="container row-span-1 laptop:mx-0">{description}</div>
        </div>
    </div>
);
}
