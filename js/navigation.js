// GLOBAL VARIABLES
let allowScrolling = true;
const tabArray = ["home", "about", "experience", "projects", "contact"];
let pageConditions = {
    "home": [false, false],
    "about": [false, false],
    "experience": [false, false],
    "projects": [false, false],
    "extra-details": [false, false],
    "contact": [false, false]
}
setupListeners();

/**
 * Runs on scroll.
 */
window.addEventListener('wheel', (e) => {
    if (allowScrolling) {
        let currentTAB = getCurrentTab();

        if (e.wheelDelta > 0) {
            setTimeout(() => {window.open(getCurrentURL() + "#" + getPreviousTab(currentTAB), "_self")}, 200);
        } else {
            setTimeout(() => {window.open(getCurrentURL() + "#" + getNextTab(currentTAB), "_self")}, 200);
        }
    }
});

/**
 * Get current url (everything to the left of the '#' if it exists).
 * @returns Current URL.
 */
function getCurrentURL() {
    let currentURL = window.location.href;
    return currentURL.split("#")[0];
}

/**
 * Get the currently open tab.
 * @returns The current tab.
 */
function getCurrentTab() {
    let currentURL = window.location.href;
    let tab = currentURL.split("#")[1];
    return tab ? tab : "home";
}

/**
 * Determine the next tab to open.
 * @returns The next tab to open.
 */
function getNextTab(currentTab) {
    if (!pageConditions[currentTab][1] || currentTab === tabArray[tabArray.length - 1] || currentTab === "extra-details") {
        return currentTab;
    }

    for (let index = 0; index < tabArray.length; index++) {
        if (tabArray[index] === currentTab) {
            return tabArray[index + 1];
        }
    }

    return currentTab;
}

/**
 * Find the previous tab to open.
 * @returns The previous tab to open.
 */
function getPreviousTab(currentTab) {
    if (!pageConditions[currentTab][0] || currentTab === tabArray[0]) {
        return currentTab;
    } else if (currentTab === "extra-details") {
        return "experience";
    }

    for (let index = 0; index < tabArray.length; index++) {
        if (tabArray[index] === currentTab) {
            return tabArray[index - 1];
        }
    };

    return currentTab;
}

/**
 * Setup listeners to detect when the current page is at the start/end (to know when to move to the next page).
 * Also detect if ctrl/shift is held down.
 */
function setupListeners() {
    for (let element of tabArray) {
        let el = document.getElementById(`endof-${element}`);
        let observer = new window.IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    // Reached the end of the page.
                    setTimeout(() => {
                        pageConditions[element][1] = true;
                    }, 300);
                    return;
                }
                // No longer end of page.
                pageConditions[element][1] = false;
            }, {
            root: null,
            threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
        })
        observer.observe(el);

        el = document.getElementById(`startof-${element}`);
        observer = new window.IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    // Reached the start of the page.
                    setTimeout(() => {
                        pageConditions[element][0] = true;
                    }, 300);
                    return;
                }
                // No longer start of page.
                pageConditions[element][0] = false;
            }, {
            root: null,
            threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
        })
        observer.observe(el);
    }

    let el = document.getElementById(`endof-extra-details`);
    let observer = new window.IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Reached the end of the page.
                setTimeout(() => {
                    pageConditions["extra-details"][1] = true;
                }, 300);
                return;
            }
            // No longer end of page.
            pageConditions["extra-details"][1] = false;
        }, {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    })
    observer.observe(el);

    el = document.getElementById(`startof-extra-details`);
    observer = new window.IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Reached the start of the page.
                setTimeout(() => {
                    pageConditions["extra-details"][0] = true;
                }, 300);
                return;
            }
            // No longer start of page.
            pageConditions["extra-details"][0] = false;
        }, {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    });
    observer.observe(el);


    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey || event.shiftKey) {
            allowScrolling = false;
        }
    });
    document.addEventListener("keyup", function (event) {
        if (event.keyCode === 17 || event.keyCode == 16) {
            allowScrolling = true;
        }
    });
}
