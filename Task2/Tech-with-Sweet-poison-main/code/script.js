//////////////////////////// Js For All Pages ////////////////////////////

// Get Icons For Change Themes And Mode
const showThemeColorsBtn = document.querySelector(".show-theme-colors-icon");
const changeModeBtn = document.querySelector(".change-mode-icon")


// Add Click Event On ChangeModeBtn to Change Mode (Dark Mode or Light Mode)
changeModeBtn.addEventListener('click', function () {
    document.body.classList.toggle("light-mode");
    this.firstElementChild.classList.toggle("fa-sun");
    this.firstElementChild.classList.toggle("fa-moon");
})


// Function to Animate biswajit Name
function animateBiswajitName() {
    const biswajitName = document.querySelector(".hero-left h1 span");
    biswajitName.classList.remove("animate-biswajit-name");
    setTimeout(function () {
        biswajitName.classList.add("animate-biswajit-name");
    }, 0)
}


// Add Click Event On showThemeColorsBtn to Change Display Theme Colors
showThemeColorsBtn.addEventListener('click', function () {
    const themeColorsBox = document.querySelector(".theme-colors-box");

    // Show Theme Colors Options
    if (getComputedStyle(themeColorsBox).maxWidth == "0px")
        themeColorsBox.style.maxWidth = themeColorsBox.scrollWidth + 'px';
    else
        themeColorsBox.style.maxWidth = 0;

    // Apply Selected Theme
    const themeColors = document.querySelectorAll(".colors span");
    themeColors.forEach(function (themeColor) {
        themeColor.addEventListener('click', function () {
            document.documentElement.style.setProperty("--active-theme", getComputedStyle(this).backgroundColor);
            animatebiswajitName();
        })
    })

})


// Function to Generate Random Number Between Two Numbers
function randomBetweenMtoN(lowerNum, upperNum) {
    return (Math.floor(Math.random() * (upperNum - lowerNum + 1) + lowerNum));
}


// Get Nav Links 
const navLinks = document.querySelectorAll(".aside-nav-links li a");

// Add Event Listner On Nav Links to Display Appropriate Page 
navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {

        // Prevent Default Behaiour
        event.preventDefault();

        if (!this.classList.contains("active-nav-link"))
            showPage(this.getAttribute("href"));

    })
})

// Function to Display Page
function showPage(page) {
    const pages = document.querySelectorAll(".pages-container > .page");

    for (let i = 0; i < pages.length; i++) {
        navLinks[i].classList.remove("active-nav-link");
        pages[i].classList.remove("active-page");
    }

    document.querySelector(`.aside-nav-links li a[href="${page}"]`).classList.add("active-nav-link");
    document.querySelector(`.pages-container section${page}`).classList.add("active-page");
}


// Get All Buttons that Requires Redirection to Another Page
const redirectBtns = document.querySelectorAll("a[data-redirect]");

// Add Event Lisnter on showContactPageBtns to Show Contact Page When Clicked
redirectBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {

        // Prevent Default Behaiour
        event.preventDefault();

        if (!document.querySelector(`.aside-nav-links li a[href='${btn.getAttribute("href")}']`).classList.contains("active-nav-link")) {
            showPage(this.getAttribute("href"));
        }

    })
})



//////////////////////////// Js For About Page ////////////////////////////


// Get About Info Open Btns
const aboutInfoOpenBtns = document.querySelectorAll(".about-info-open-btn");


// Add Event Listner On About Info Open Btn to Show About Info
aboutInfoOpenBtns.forEach(function (aboutInfoOpenBtn) {
    aboutInfoOpenBtn.addEventListener('click', function () {

        this.firstElementChild.classList.toggle("fa-minus");
        this.firstElementChild.classList.toggle("fa-plus");

        const aboutInfoContent = this.parentElement.nextElementSibling;
        if (getComputedStyle(aboutInfoContent).maxHeight == "0px")
            aboutInfoContent.style.maxHeight = aboutInfoContent.scrollHeight + 'px';
        else
            aboutInfoContent.style.maxHeight = 0;

    })
})


//////////////////////////// Js For Projects Page ////////////////////////////


// list of All Categories Projects Details
const allCategoriesProjectsDetails = [
    {   projectsshown:"For visulazation purpose only",
        projectsCategory: "html",
        projectsList: [
            {
                projectThumbnailSrc: "port_land.png",
                projectTitle: "simple portfolio website",
                
            },
            {
                projectThumbnailSrc: "port2_land.jpg",
                projectTitle: "simple blogs website",
               
            },
            {
                projectThumbnailSrc: "port3_land.png",
                projectTitle: "simple music website",
              
            },
            {
                projectThumbnailSrc: "port4_land.jpg",
                projectTitle: "calender using tables",
           
            },
            {
                projectThumbnailSrc: "port5_land.jpg",
                projectTitle: "complex time-table layout",
               
            },
            {
                projectThumbnailSrc: "port6_land.jpg",
                projectTitle: "flag coloured table",
                
            },
            {
                projectThumbnailSrc: "assets/images/html-projects-thumbnails/thumbnail-7.jpg",
                projectTitle: "stunning time-table",

            },
            {
                projectThumbnailSrc: "assets/images/html-projects-thumbnails/thumbnail-8.jpg",
                projectTitle: "black-bg table",
               
            },
            {
                projectThumbnailSrc: "assets/images/html-projects-thumbnails/thumbnail-9.svg",
                projectTitle: "colorful table",
               
            },
            {
                projectThumbnailSrc: "assets/images/html-projects-thumbnails/thumbnail-10.jpg",
                projectTitle: "complex table layout",
               
            },
            {
                projectThumbnailSrc: "assets/images/html-projects-thumbnails/thumbnail-11.jpg",
                projectTitle: "website layout using tables",
               
            }
        ]
    },
    {
        projectsCategory: "html css js",
        projectsList: [
            {
                projectThumbnailSrc: "port7_land.png",
                projectTitle: "super shoes store",
                
            },
            {
                projectThumbnailSrc: "port8_land.png",
                projectTitle: "gym and fitness",
                
            },
            {
                projectThumbnailSrc: "port9_land.jpg",
                projectTitle: "tour and travels",
         

            },
            {
                projectThumbnailSrc: "cartoooooon.jpg",
                projectTitle: "animated cartoon portfolio",
               
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-projects-thumbnails/thumbnail-5.jpg",
                projectTitle: "photohd studio",
               
            },
            {
                projectThumbnailSrc: "code1.png",
                projectTitle: "code with Biswajit",
        
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-projects-thumbnails/thumbnail-7.jpg",
                projectTitle: "marketing with Biswajit",
                
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-projects-thumbnails/thumbnail-8.jpg",
                projectTitle: "introspect website",
                
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-projects-thumbnails/thumbnail-9.jpg",
                projectTitle: "online education institute",
          
            },
            {
                projectThumbnailSrc: "123.png",
                projectTitle: "portfolio landing page",
               
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-projects-thumbnails/thumbnail-11.jpg",
                projectTitle:"Technology World",
            }
        ]
    },
    {
        projectsCategory: "html css js mini",
        projectsList: [
            {
                projectThumbnailSrc: "assets/images/html-css-js-mini-projects-thumbnails/thumbnail-1.jpg",
                projectTitle: "auto and custom slider",
  
            },
            {
                projectThumbnailSrc: "port10_land.jpg",
                projectTitle: "bouncing balls",
               
            },
            {
                projectThumbnailSrc: "card.png",
                projectTitle: "collapsing card",
          
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-mini-projects-thumbnails/thumbnail-4.jpg",
                projectTitle: "amazing auto slider",
                
            },
            {
                projectThumbnailSrc: "buttons.jpg",
                projectTitle: "amazing buttons",
               
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-mini-projects-thumbnails/thumbnail-6.jpg",
                projectTitle: "pre-loaders",
              
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-mini-projects-thumbnails/thumbnail-7.svg",
                projectTitle: "interactive image slider",
                
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-mini-projects-thumbnails/thumbnail-8.jpg",
                projectTitle: "animated radio buttons",
            
            },
            {
                projectThumbnailSrc: "scroll.png",
                projectTitle: "animated auto scrolling slider",
               
            },
            {
                projectThumbnailSrc: "assets/images/html-css-js-mini-projects-thumbnails/thumbnail-10.jpg",
                projectTitle: "surprising card",
               
            },
            {
                projectThumbnailSrc: "image.png",
                projectTitle: "simple image slider",
                
            },
        ]
    },
    {
        projectsCategory: "javascript",
        projectsList: [
            {
                projectThumbnailSrc: "typing.png",
                projectTitle: "typing speed tester",
                
            },
            {
                projectThumbnailSrc: "car.gif",
                projectTitle: "vehicles racing animation",
               
            },
        ]

    },
   
];


// Get All Projects Container to Append and Show Projects
const allProjectsContainer = document.querySelector(".all-projects-container");

// Function to Display Given Categories Projects
function displayGivenCategoryProjects(projectsOfAnyCategory) {

    // Create Inner Projects Container And Append to All Projects Container
    const innerProjectsContainer = document.createElement("div");
    innerProjectsContainer.className = "inner-projects-container sub-sec-margin-bottom";
    allProjectsContainer.appendChild(innerProjectsContainer);


    // Create Projects Category Heading And Append to Inner Projects Container
    const projectsCategoryHeading = document.createElement("h3");
    projectsCategoryHeading.classList.add("projects-category-heading");
    projectsCategoryHeading.setAttribute("data-projects-category", `${projectsOfAnyCategory.projectsCategory}`);
    projectsCategoryHeading.innerHTML = `<i class="fa-solid fa-star"></i> ${projectsOfAnyCategory.projectsCategory} Projects`;
    innerProjectsContainer.appendChild(projectsCategoryHeading);

    // Create Project Boxes Container And Append to Inner Projects Container
    const projectsBoxesContainer = document.createElement("div");
    projectsBoxesContainer.classList.add("projects-boxes-container");
    innerProjectsContainer.appendChild(projectsBoxesContainer);

    // Function to Display Given Projects List Boxes
    function displayProjectsListBoxes(projectsList) {

        projectsList.forEach(function (project, projectIndex) {

            // Create Project Box
            const projectBox = document.createElement("div");
            projectBox.classList.add("project-box");
            if (projectIndex > 2)
                projectBox.classList.add("hide-project");


            // Set Inner Content of Project Box
            projectBox.innerHTML = `
              <div class="project-thumbnail-box">
              <img src="${project.projectThumbnailSrc}">
              </div>
              <h4 class="project-title">${project.projectTitle}</h4>
              <div class="project-view-btns-group">
                 <a target="_blank" class="project-view-btn" href="${project.viewProjectLiveUrl}">view live <i
                       class="fa-solid fa-arrow-right"></i></a>
                 <a target="_blank" class="project-view-btn" href="${project.viewProjectCodeUrl}">view code <i
                       class="fa-solid fa-arrow-right"></i></a>
              </div>
              `;

            // Add Event on Thumbnail to Redirect to Live Project
            projectBox.querySelector(".project-thumbnail-box").onclick = function () {
                window.open(
                    `${project.viewProjectLiveUrl}`,
                    '_blank'
                );
            }


            // Append to Project Boxes Container
            projectsBoxesContainer.appendChild(projectBox);
        })

    }

    displayProjectsListBoxes(projectsOfAnyCategory.projectsList);

    // Create Show More Projects Btn If There Are More Than 3 Projects
    if (projectsOfAnyCategory.projectsList.length > 3) {
        const moreProjectsBtn = document.createElement("button");
        moreProjectsBtn.className = "primary-btn more-projects-btn";
        moreProjectsBtn.innerText = "show more"

        // Append to Inner Projects Container
        innerProjectsContainer.appendChild(moreProjectsBtn);

        // Add Event Listner On Show More Projects Btn to Display More Projects
        moreProjectsBtn.addEventListener('click', function () {

            if (this.innerText.toLocaleLowerCase() == "show more")
                this.innerText = "show less";
            else
                this.innerText = "show more";


            const projectBoxes = this.previousElementSibling.querySelectorAll(".project-box");

            projectBoxes.forEach(function (projectBox, projectBoxIndex) {
                if (projectBoxIndex > 2)
                    projectBox.classList.toggle("hide-project");
            })

        })
    }

}

// Display All Projects of All Categories
allCategoriesProjectsDetails.forEach(function (projectsCategory) {
    displayGivenCategoryProjects(projectsCategory);
});



// Function to Display Projects of Searching Category
function displayProjectsOfSearchedCategory() {

    // Get Projects Category Headings
    const projectsCategoryHeadings = document.querySelectorAll(".projects-category-heading");
    const searchedValue = projectSearchField.value;

    projectsCategoryHeadings.forEach(function (projectsCategoryHeading) {

        if (projectsCategoryHeading.getAttribute("data-projects-category").indexOf(searchedValue.toLocaleLowerCase()) < 0)
            projectsCategoryHeading.parentElement.style.display = "none";
        else
            projectsCategoryHeading.parentElement.style.display = "block";
    })
}

// Get Search Box And Input to Display Searched Projects
const projectSearchBar = document.querySelector(".project-search-bar");
const projectSearchField = document.getElementById("project-search-field");

projectSearchBar.addEventListener('mouseover', function () {
    projectSearchField.focus();
})

projectSearchBar.addEventListener('mouseout', function () {
    projectSearchField.blur();
})

projectSearchField.addEventListener("input", function (event) {
    displayProjectsOfSearchedCategory();
});



