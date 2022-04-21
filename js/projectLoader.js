const projectList = [
    {
        "title": "Tetrx",
        "description": "Check out my Capstone project for my final year of engineering! This is a novel take on the traditional tetris game allowing 4 players to play on a single arena. It even features a Jackbox-style spectator voting system (for those situations where you have more than 3 friends).",
        "date": "April • 2022",
        "tech": [
            "NodeJS",
            "TypeScript",
            "Phaser3",
            "SocketIO"
        ],
        "links": [
            "https://github.com/ECE493G14Capstone/Capstone",
            "https://github.com/ECE493G14Capstone/Capstone/pulls?q=is%3Apr+author%3AAdityaHarvi+is%3Aclosed"
        ]
    },
    {
        "title": "Dungeon Master",
        "description": "A Discord bot allowing users to create and host their own D&D games to play with friends across the globe. Keeps the creativity of a traditional table-top game but move the setting online!",
        "date": "August • 2020",
        "tech": [
            "NodeJS",
            "JavaScript",
            "SQLite3"
        ],
        "links": [
            "https://github.com/AdityaHarvi/Dungeon-Master"
        ]
    },
    {
        "title": "Android Book Sharing App",
        "description": "An Android mobile app that can pair book owners with book borrowers. It even comes with a GPS navigator so you know exactly where to meet to swap books.",
        "date": "November • 2020",
        "tech": [
            "Java",
            "Firebase"
        ],
        "links": [
            "https://github.com/CMPUT301F20T05/CriEngine",
            "https://github.com/CMPUT301F20T05/CriEngine/pulls?q=is%3Apr+author%3AAdityaHarvi+is%3Aclosed"
        ]
    },
    {
        "title": "Arduino Piano",
        "description": "A mini piano on an Arduino. This little guy can remember your tunes, play them back, and even score you on how well you played!",
        "date": "January • 2019",
        "tech": [
            "C++"
        ],
        "links": [
            "https://github.com/AdityaHarvi/Arduino-Piano"
        ]
    }
];

loadProjects();

/**
 * Formats project data using DOM elements.
 */
function loadProjects() {
    let projectLocation = document.getElementById("project-location");
    projectLocation.innerHTML = "";

    for (const project of projectList) {
        let listElement = document.createElement("li");
        listElement.setAttribute("class", "project-container");

        let projectTitleConatiner = document.createElement("div");
        projectTitleConatiner.setAttribute("class", "row");

        let projectTitle = document.createElement("div");
        projectTitle.setAttribute("class", "col project-header");
        projectTitle.innerHTML = project.title;

        let projectDate = document.createElement("div");
        projectDate.setAttribute("class", "col project-date");
        projectDate.innerHTML = project.date;

        projectTitleConatiner.appendChild(projectTitle);
        projectTitleConatiner.appendChild(projectDate);

        let projectDescription = document.createElement("div");
        projectDescription.setAttribute("class", "project-description");
        projectDescription.innerHTML = project.description;

        let footer = document.createElement("div");
        footer.setAttribute("class", "row");

        let footerCol1 = document.createElement("div");
        footerCol1.setAttribute("class", "col-md-12");
        
        let footerCol2 = document.createElement("div");
        footerCol2.setAttribute("class", "col-md-12");

        let link = document.createElement("div");
        link.setAttribute("class", "project-button");
        let linkAnchor = document.createElement("a");
        linkAnchor.setAttribute("href", project.links[0]);
        linkAnchor.setAttribute("target", "_blank");
        linkAnchor.innerHTML = "Code";

        link.appendChild(linkAnchor);

        footerCol1.appendChild(link);

        listElement.appendChild(projectTitleConatiner);
        listElement.appendChild(projectDescription);

        for (const tech of project.tech) {
            let techIcon = document.createElement("div");
            techIcon.setAttribute("class", "project-tech");
            techIcon.innerHTML = tech;
            footerCol2.appendChild(techIcon);
        }

        if (project.links.length > 1) {
            link = document.createElement("div");
            link.setAttribute("class", "project-button");
            linkAnchor = document.createElement("a");
            linkAnchor.setAttribute("href", project.links[1]);
            linkAnchor.setAttribute("target", "_blank");
            linkAnchor.innerHTML = "My Contributions";

            link.appendChild(linkAnchor);
            footerCol1.appendChild(link);
            listElement.appendChild(footerCol1);
        }

        footer.appendChild(footerCol1);
        footer.appendChild(footerCol2);
        listElement.appendChild(footer);

        projectLocation.appendChild(listElement);
    }

    let endOfPage = document.createElement("div");
    endOfPage.setAttribute("id", "endof-projects");
    projectLocation.appendChild(endOfPage);
}
