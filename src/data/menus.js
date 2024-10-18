const menus = {};

menus["main"] = getMainMenu();

export default menus;

function getMainMenu() {
    return [
        {
            url: "/",
            label: "home"
        },
        {
            url: "/eat",
            label: "eat"
        },
        {
            url: "/drink",
            label: "drink",
            hidden: false
        },
        {
            url: "/drink-menu",
            label: "drink menu",
            hidden: true
        },
        {
            url: "/events",
            label: "events",
            hidden: false
        },
        {
            url: "/about",
            label: "about",
            hidden: true
        },
        {
            url: "/contact",
            label: "contact us",
            hidden: true
        }
    ];
}


function getFooterMenu() {
    return [
        {
            url: "/",
            label: "home"
        },
        {
            url: "/eat",
            label: "eat"
        },
        {
            url: "/drink",
            label: "drink"
        },
        {
            url: "/events",
            label: "events"
        },
        {
            url: "/about",
            label: "about"
        },
        {
            url: "/contact",
            label: "contact us"
        }
    ];
}
