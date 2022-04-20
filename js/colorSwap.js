const darkModePallet = {
    bgColor: "#1f1f1f",
    textColor: "white",
    iconBackgroundDefault: "white",
    iconDefault: "black",
    iconHovered: "white",
    cardbg: "#0d0d0d",
    cardBorder: "gray",
    shadow: "rgba(235, 163, 30, 0.7)",
    fontWeight: "500",
    projectCard: "#282828",

    diamondOrange: "#DF861D",
    diamondDarkOrange: "#FDC029",
    iconOrange: "orange",
    brightOrange: "#fdc029"
};
const lightModePallet = {
    bgColor: "#e1e1e1",
    textColor: "black",
    iconBackgroundDefault: "black",
    iconDefault: "white",
    iconHovered: "black",
    cardbg: "gray",
    cardBorder: "black",
    shadow: "black",
    fontWeight: "600",
    projectCard: "#282828",

    diamondOrange: "#11823b",
    diamondDarkOrange: "#004d25",
    iconOrange: "#11823b",
    brightOrange: "#48bf53"
};

let isDarkMode = true;
let diamondSVG = document.querySelectorAll("line");
setStyles(darkModePallet);

function swapColor() {
    if (isDarkMode) {
        isDarkMode = false;
        document.getElementsByClassName("fa-sun-o")[0].setAttribute("class", "icon fa fa-moon-o fa-2x");
        setStyles(lightModePallet);
        setSVGStyle(lightModePallet, darkModePallet);
    } else {
        isDarkMode = true;
        document.getElementsByClassName("fa-moon-o")[0].setAttribute("class", "icon fa fa-sun-o fa-2x");
        setStyles(darkModePallet);
        setSVGStyle(darkModePallet, lightModePallet);
    }
}

function setStyles(pallet) {
    const colorPallet = document.querySelector(":root");

    for (const style in pallet) {
        colorPallet.style.setProperty(`--${style}`, pallet[style]);
    }
}

function setSVGStyle(newPallet, oldPallet) {
    for (let line of diamondSVG) {
        if (line.getAttribute("stroke") === oldPallet.diamondOrange) {
            line.setAttribute("stroke", newPallet.diamondDarkOrange);
        } else {
            line.setAttribute("stroke", newPallet.diamondOrange);
        }
    }
}
