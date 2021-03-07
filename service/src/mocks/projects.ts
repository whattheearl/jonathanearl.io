import { Project } from "../models/Project";

export const MOCK_PROJECTS: Project[] = [
    {
        id: 1,
        name: "bkmrkr",
        summary: "Have you ever needed to change tasks, but don't want to lose the information in the tabs you have open? bkrmrk is a chrome plugin to make switching context's easier. Quickly save your open tabs in local cache for later reference. Built using React for UI, custom built UI elements. Storage is currently limited to local cache.",
        startDate: "",
        endDate: "",
        media: {
            previewImg: "https://jonathanearl.io/assets/img/projects/bkmrkr-small.jpg",
            url: "https://chrome.google.com/webstore/detail/bkmrkr/fpebadocnijkabapochompcgjedcbgno?hl=en",
            githubUrl: "https://github.com/whattheearl/NewTab"
        }
    },
    {
        id: 2,
        name: "FIG",
        startDate: "",
        endDate: "6/1/2018",
        summary: "A Instagram-Like app using React/Redux for the front-end, and Express/Mongoose for the API The most difficult part was figuring out how to configure passport for user authentication! Currently you can post photo's and follow users so they show up in your feed. I loved how React allows you to build reusable components. OOP on the web!",
        media: {
            previewImg: "https://jonathanearl.io/assets/img/projects/kons-small.jpg",
            url: "https://shielded-brook-76928.herokuapp.com/explore",
            githubUrl: "https://github.com/whattheearl/fig",
        }
    },
    {
        id: 3,
        name: "Game Engine GUI",
        startDate: "",
        endDate: "6/1/2016",
        summary: "This was fun an 8 week project to build a front-end for a student made game engine.",
        media: {
            previewImg: "https://jonathanearl.io/assets/img/projects/game_gui-small.jpg",
            githubUrl: "https://s3.us-east-2.amazonaws.com/gamegui.jonathanearl.io/Game/BreakOut.zip",
            url: "http://gamegui.jonathanearl.io.s3-website.us-east-2.amazonaws.com/"
        }
    }
];
