const projectList = [
    {
        "title": "Standby (Game Jam)",
        "description": "A small and thrilling puzzle-horror game where you try to escape a dark airplane fuselage by using a limited number of batteries to power spotlights. Keep away from the darkness, its where the monsters lurk!",
        "date": "June • 2024",
        "tech": [
            "Unreal Engine 5",
            "Blueprints",
        ],
        "links": [
            "https://github.com/AdityaHarvi/game-jam-standby",
            ""
        ],
        "banner": "standby_banner.png"
    },
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
            "https://github.com/AdityaHarvi/Tetrix",
            "https://github.com/ECE493G14Capstone/Capstone/pulls?q=is%3Apr+author%3AAdityaHarvi+is%3Aclosed"
        ],
        "banner": "tetrix_banner.png"
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
            "https://github.com/AdityaHarvi/Dungeon-Master",
            ""
        ]
    },
    {
        "title": "Arduino Piano",
        "description": "A mini piano on an Arduino. This little guy can remember your tunes, play them back, and even score you on how well you played!",
        "date": "January • 2019",
        "tech": [
            "C++",
            "Makefile"
        ],
        "links": [
            "https://github.com/AdityaHarvi/Arduino-Piano",
            ""
        ]
    },
    {
        "title": "Arduino Invaders",
        "description": "A recreation of the classic 'Space Invaders' but on an Arduino! By merging together multiple breadboards and wiring lights/buttons in such a way that they can represent player movement and enemy collisions, this is my attempt at making a handheld gaming device.",
        "date": "December • 2018",
        "tech": [
            "C++",
            "Makefile"
        ],
        "links": [
            "https://github.com/AdityaHarvi/Arduino-Invaders",
            ""
        ]
    }
];

loadProjectsIntoTimeline();

/**
 * Formats project timeline data using DOM elements.
 */
function loadProjectsIntoTimeline() {
    let projectLocation = document.getElementById("project-location");
    projectLocation.innerHTML = "";

    let isDateOnLeft = true;

    for (const project of projectList) {
        let dateElement = getProjectTimestamp(project.date, isDateOnLeft);
        let middleElement = getMiddleComponent();
        let projectInfo = getProjectInfo(project.title, project.description, project.tech);
        projectInfo.onclick = () => {
            loadProject(project);
        }

        if (isDateOnLeft) {
            projectLocation.appendChild(dateElement);
            projectLocation.appendChild(middleElement);
            projectLocation.appendChild(projectInfo);
        }
        else {
            projectLocation.appendChild(projectInfo);
            projectLocation.appendChild(middleElement);
            projectLocation.appendChild(dateElement);
        }

        // Toggle the date position;
        isDateOnLeft = !isDateOnLeft;
    }

    let endOfPage = document.createElement("div");
    endOfPage.setAttribute("id", "endof-projects");
    projectLocation.appendChild(endOfPage);
}

/**
 * Get a div containing the middle white line + circle.
 * @returns The constructed div along with all appropriate class attributes.
 */
function getMiddleComponent() {
    let timelineMiddle = document.createElement("div");
    timelineMiddle.setAttribute("class", "timeline__middle");
    
    let timelinePoint = document.createElement("div");
    timelinePoint.setAttribute("class", "timeline__point");

    timelineMiddle.appendChild(timelinePoint);
    return timelineMiddle;
}

/**
 * Get a div containing the project Title/Description
 * @param {string} title The project title.
 * @param {string} description The project description;
 * @returns The constructed div along with all appropriate children.
 */
function getProjectInfo(title, description, techArray) {
    let projectInfoContainer = document.createElement("div");
    projectInfoContainer.setAttribute("class", "timeline__component timeline__component--bg");

    let projectTitle = document.createElement("h2")
    projectTitle.setAttribute("class", "timeline__title");
    projectTitle.innerHTML = title;

    let projectDescription = document.createElement("p")
    projectDescription.setAttribute("class", "timeline__paragraph");
    projectDescription.innerHTML = description;

    projectInfoContainer.appendChild(projectTitle);
    projectInfoContainer.appendChild(projectDescription);
    projectInfoContainer.appendChild(getProjectTech(techArray));

    return projectInfoContainer;
}

/**
 * Get the div containing a list of tech used for the project.
 * @param {array} techArray The array of tech strings.
 * @returns The constructed div along with all appropriate children.
 */
function getProjectTech(techArray) {
    let projectTech = document.createElement("h4");
    projectTech.setAttribute("class", "timeline__tech");
    
    let techString = "";

    for (let index = 0; index < techArray.length; index++) {
        techString += techArray[index];
        if (index == techArray.length - 1) {
            break;
        }

        techString += " | "
    }

    projectTech.innerHTML = "» " + techString;

    return projectTech;
}

/**
 * Get a div containing the timestamp for the project.
 * @param {string} date The date the project was completed.
 * @param {boolean} isAppearingOnLeft Whether the date should be appearing on the left or right of the timeline.
 * @returns The constructed div along with all appropriate children.
 */
function getProjectTimestamp(date, isAppearingOnLeft) {
    let projectTimestampContainer = document.createElement("div");
    projectTimestampContainer.setAttribute("class", "timeline__component");

    let projectDate = document.createElement("div")
    if (isAppearingOnLeft) {
        projectDate.setAttribute("class", "timeline__date timeline__date--right");
    }
    else {
        projectDate.setAttribute("class", "timeline__date");
    }
    projectDate.innerHTML = date;

    projectTimestampContainer.appendChild(projectDate);
    return projectTimestampContainer;
}

function loadProject(project) {
    if (project.links.length > 0) {
        window.open(project.links[0], "_blank").focus();
    }
}
