/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Chapter() {

    const styleTabActive =
        'tab-btn rounded-t-md border border-b-transparent p-4';
    const styleTabInactive =
        'tab-btn rounded-t-md border border-transparent border-b-inherit p-4 text-blue-400 hover:text-blue-500 hover:underline hover:underline-offset-2';
    const toggleTabs = () => {console.log('toggleTabs')};
    
    return (
    <>
        <div>
            <h1 class='text-4xl font-bold'>ORS 1.001</h1>

            <p class='text-3xl font-thin'>
                State policy for courts
            </p>
        </div>

        <div class='flex flex-col gap-4'>

            <ul class='flex'>
                <li>
                    <button
                        id='tab-btn-1'
                        class={styleTabActive}
                        onclick={toggleTabs}
                    >
                        Text
                    </button>
                </li>
                <li>
                    <button
                        id='tab-btn-2'
                        class={styleTabInactive}
                        onclick={toggleTabs}
                    >
                        Annotations
                    </button>
                </li>
                <li class='w-full border border-transparent border-b-inherit p-4'>
                    &nbsp;
                </li>
            </ul>
        </div>

        <p
            id='tab-body-1'
            class='tab-body flex flex-col gap-4'
        >
            The Legislative Assembly hereby declares that, as a
            matter of statewide concern, it is in the best interests
            of the people of this state that the judicial branch of
            state government, including the appellate, tax and
            circuit courts, be funded and operated at the state
            level. The Legislative Assembly finds that state funding
            and operation of the judicial branch can provide for
            best statewide allocation of governmental resources
            according to the actual needs of the people and of the
            judicial branch by establishing an accountable,
            equitably funded and uniformly administered system of
            justice for all the people of this state. [1981 s.s. c.3
            §1]
            <hr />
            <small>
                <i>
                    Source: Section 1.001 — State policy for courts,{' '}
                    <a href='https://­oregonlegislature.­gov/bills_laws/ors/ors001.­html'>https://­oregonlegislature.­gov/bills_laws/ors/ors001.­html</a>
                </i>
            </small>
        </p>

        <p
            id='tab-body-2'
            class='tab-body flex flex-col gap-4'
        >

        <p>Law Review Citations</p>

        <p>50 WLR 291 (2014)</p>
        </p>
        
    </>
    );
}
