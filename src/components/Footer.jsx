


/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Legal from "@ocdla/global-components/src/Legal";
import Sitemap from "@ocdla/global-components/src/Sitemap";
import SitemapCategory from "@ocdla/global-components/src/SitemapCategory";
import Social from "@ocdla/global-components/src/Social";
import Contacts from "@ocdla/global-components/src/Contacts";
import Logo from "@ocdla/global-components/src/Logo";
import GoogleMaps from "@ocdla/global-components/src/GoogleMaps";




export default function Footer({siteMapMenu}) {


    return (
        <footer class="text-slate-200 bg-wb-black p-8 tablet:p-16 laptop:p-32 laptop:pt-16">


            <div class="container text-slate-200 text-center text-4xl mb-20" style="line-height:1.0rem;">
                <span class="allura-regular text-slate-300 inline-block">Every beer has a story</span>
            </div>

            <div class="container tablet:grid tablet:grid-cols-6">

                <div class="col-start-1 pb-8">
                    <a href='/'>
                        <img src="../images/logos/logo-header.png" />
                    </a>
                </div>

                <div class="col-start-3 pb-8">
                    <h3 class="text-wb-red text-lg">Contact</h3>
                    <ul class="text-slate-400">
                        <li>Erica Baze</li>
                        <li><a href="http://thebierelibrary.ocdla.org/" class="hover:text-wb-lime">thebierelibrary.com</a></li>
                        <li><a href="tel:+14106101726" class="hover:text-wb-lime">(410) 610-1726</a></li>
                        <li><a href="mailto:info@waldbusserciderworks.com" class="hover:text-wb-lime">info@thebierelibrary.com</a></li>
                    </ul>
                    <Social instagram="thebierelibrary" />
                </div>

                <Sitemap className="col-start-5 text-nowrap text-stone-400 pb-8" style="font-weight:200;">
                    <SitemapCategory  title="The Bière Library" path="/" className="hover:text-stone-500"
                        Home="/"
                        About="/about"
                        Eat="/eat"
                        Drink="/drink"
                        DrinkMenu="/drink-menu"
                        FoodMenu="/food-menu"
                        Contact_Us="/contact"
                    />
                </Sitemap>

            </div>

        </footer >
    );
}

