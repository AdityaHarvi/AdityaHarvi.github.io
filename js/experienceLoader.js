const jobList = [
    {
        "company": "Inflexion Games",
        "jobTitle": "Associate Game Programmer",
        "date": "May 2022 - Present",
        "banner": "nightingale_banner.png",
        "description": "I'll be continuing my role from Improbable as a UI programmer on the newely announced game, Nightingale. Check out the game trailer here: ",
        "video": [
            "https://www.youtube.com/embed/raSjAJcftMs"
        ]
    },
    {
        "company": "Improbable",
        "jobTitle": "Associate Game Programmer",
        "date": "May 2021 - Dec 2021",
        "banner": "improbable_banner.png",
        "description": "I joined Improbable's Canadian games studio as part of their UI team. I was able to work on many key features related to the UI infrastructure like a brand new window stack to standardize a lot of the systems currently in use. This role allowed me to take on a lot more responsibility and experience many pivotal points during the game development process. BREAK I'll be returning to this studio (now rebranded to Inflexion) in the next few months after my graduation."
    },
    {
        "company": "Intuit",
        "jobTitle": "Software Developer",
        "date": "Jan 2020 - Sept 2020",
        "banner": "quickbooks_banner.png",
        "description": "In this role, I worked on the QuickBooks Online backend systems. My duties included updating build scripts, collaborating across teams to deliever on new features, and even a tiny bit of front-end cleanup to make a safer internal deployment site. BREAK This was an amazing opportunity to support thousands of small businesses and millions of users on Intuit's platform, not to mention an amazing first step in my path towards a software engineering career."
    },
    {
        "company": "Computers for Schools",
        "jobTitle": "Computer Technician",
        "date": "May 2019 - Sept 2019",
        "banner": "cfs_banner.png",
        "description": "Computers for Schools is a non-profit organization that takes in old computers, refurbishes them, and then distributes them to schools, libraries, and other public institutes. My time at CFS was invaluable as I was able to learn a lot about computer hardware and get a good grasp of how the components communicated with each other. After all, it's good to know how a computer works if I'm going to be spending my career typing code into them! BREAK Do consider donating some old electronics to them if you have some lying around, even if they aren't in the greatest of shape. All usable tech will be safetly refurbished and anything else will be recycled!"
    }
];
loadJobCards();

/**
 * Given a company name, it will load all appropriate data onto the page.
 * @param {string} company The company name
 */
function loadExperience(company) {
    window.open(getCurrentURL() + "#extra-details", "_self");

    let job = getJobData(company);

    document.getElementById("experience-img").setAttribute("src", `./images/${job.banner}`);

    let jobTitleLocation = document.getElementById("experience-title");
    let lineBreak = document.createElement("br");

    let jobTitle = document.createElement("span");
    jobTitle.setAttribute("class", "details-title-emphasis")
    jobTitle.innerHTML = job.jobTitle;

    let jobDate = document.createElement("span");
    jobDate.setAttribute("class", "details-title-date");
    jobDate.innerHTML = job.date;

    jobTitleLocation.innerHTML = `• ${job.company} •`;
    jobTitleLocation.appendChild(lineBreak);
    jobTitleLocation.appendChild(jobTitle);
    jobTitleLocation.appendChild(lineBreak);
    jobTitleLocation.appendChild(jobDate);


    let jobDetails = document.getElementById("experience-details");
    jobDetails.innerHTML = "";

    let jobDescription = job.description.split("BREAK");
    for (let paragraph of jobDescription) {
        jobDetails.innerHTML += paragraph;
        jobDetails.appendChild(document.createElement("br"));
        jobDetails.appendChild(document.createElement("br"));
    }


    if (job.video) {
        let videoContainer = document.createElement("div");
        videoContainer.setAttribute("class", "video");

        let iframe = document.createElement("iframe");
        iframe.setAttribute("style", "position: absolute; top: 0; left: 0;");
        iframe.setAttribute("width", "90%");
        iframe.setAttribute("height", "90%");
        iframe.setAttribute("src", job.video);
        iframe.setAttribute("title", "YouTube video player");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");

        videoContainer.appendChild(iframe);
        jobDetails.appendChild(videoContainer);
    }
}

/**
 * Get current url (everything to the left of the '#' if it exists).
 * @returns Current URL.
 */
function getCurrentURL() {
    let currentURL = window.location.href;
    return currentURL.split("#")[0];
}

/**
 * Returns the job object (contains all relevent job data) when given a name.
 * @param {string} company 
 * @returns The job object.
 */
function getJobData(company) {
    for (let element of jobList) {
        if (element.company.toLowerCase().includes(company.toLowerCase())) {
            return element;
        }
    }
}

/**
 * Generates cards for the Work Experience page.
 */
function loadJobCards() {
    let cardLocations = document.getElementById("job-card-location");
    cardLocations.innerHTML = "";

    for (let job of jobList) {
        let listElement = document.createElement("li");
        listElement.setAttribute("class", "custom-card");
        listElement.onclick = () => {
            loadExperience(job.company);
        }

        let cardTitle = document.createElement("div");
        cardTitle.setAttribute("class", "custom-card-title");
        cardTitle.innerHTML = job.company;

        let hr = document.createElement("hr");

        let cardBodyContainer = document.createElement("div");
        cardBodyContainer.setAttribute("class", "custom-card-body");

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "custom-card-body-header");
        cardBody.innerHTML = job.jobTitle;

        let cardDate = document.createElement("i");
        cardDate.setAttribute("class", "fa fa-calendar custom-card-date");

        cardBodyContainer.appendChild(cardBody);
        cardBodyContainer.appendChild(cardDate);
        cardBodyContainer.innerHTML += ` ${job.date}`;

        listElement.appendChild(cardTitle);
        listElement.appendChild(hr);
        listElement.appendChild(cardBodyContainer);

        cardLocations.appendChild(listElement);
    }
}
