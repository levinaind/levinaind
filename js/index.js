let products = {
    data: [
      {
        productName: "Valorant Redesign",
        category: "ux-design",
        href:"valorant-case-study.html",
        logo: "",
        type: "GAME REDESIGN | PERSONAL PROJECT | 10-MIN READ",
        desc: "a block system concept focusing to decrease toxicity within the gaming community",
        image: "img/projects/valorant-project.png",
      },
      {
        productName: "Untangled",
        category: "programming",
        href:"https://devpost.com/software/untangled",
        git_href:"https://github.com/levinaind/EngHack-2021",
        logo: "img/projects/github.png",
        type: "HTML, CSS, JAVASCRIPT | HACKATHON ",
        desc: "a web app that allow users relieve anxiety and stress through various activity",
        image: "img/projects/untangled-project.png",
      },
      {
        productName: "TraceNext",
        category: "programming",
        href:"https://devpost.com/software/tracenext",
        git_href:"https://github.com/levinaind/TO-Hacks-2021",
        logo: "img/projects/github.png",
        type: "PYTHON, HTML, CSS, JAVASCRIPT | HACKATHON",
        desc: "a web app that allow users to mark the locations that they have visited the past 30 days to make contact tracing easy",
        image: "img/projects/tracenext-project.png",
      },
      
      {
        productName: "PolyBot",
        category: "programming",
        href:"https://devpost.com/software/polybot-r9p50y",
        git_href:"https://github.com/kevinking2031/RUhacks2021",
        logo: "img/projects/github.png",
        type: "PYTHON, HTML, CSS, JAVASCRIPT | HACKATHON",
        desc: "a Discord bot that helps students with their virtual language learning journey",
        image: "img/projects/polybot-project.png",
      },
      {
        productName: "hang on!",
        category: "ux-design",
        href:"hangon-case-study.html",
        logo: "",
        type: "UI/UX, MOBILE APP | DESIGNATHON | 7-MIN READ",
        desc: "a mobile app prototype that allows user to swap and upcycle clothes in effort to stop fast fashion",
        image: "img/projects/hangon-project.png",
      },
      {
        productName: "dough",
        category: "programming",
        href:"https://devpost.com/software/dough-xtmba8",
        git_href:"https://github.com/levinaind/dough",
        logo: "img/projects/github.png",
        type: "PYTHON, HTML, CSS | HACKATHON",
        desc: "a web app that teaches personal finance in a gamified environment",
        image: "img/projects/dough-project.png",
      },
      {
        productName: "Help Me Focus",
        category: "programming",
        href:"https://devpost.com/software/help-me-focus",
        git_href:"https://github.com/felixindrawan/GarudaHacks",
        logo: "img/projects/github.png",
        type: "HTML, CSS, JAVASCRIPT | HACKATHON",
        desc: "a web app that provides tools to help students learn in an online environment",
        image: "img/projects/hmf-project.png",
      },
      {
        productName: "The Hub Redesign",
        category: "ux-design",
        href:"thehub-case-study.html",
        logo: "",
        type: "WEB REDESIGN | PERSONAL PROJECT | COMING SOON",
        desc: "a website redesign for The Hub, a local rock climbing gym service in Markham to improve user experience",
        image: "img/projects/thehub-project.png",
      },
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    //imgContainer.appendChild(image);
    let a = document.createElement("a");
    a.href = i.href;
    a.appendChild(image);
    imgContainer.appendChild(a);
    card.appendChild(imgContainer);
    //container
    let project_container = document.createElement("div");
    project_container.classList.add("project-container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName;
    let row = document.createElement("div");
    row.classList.add("title-row");

    let title_div = document.createElement("div");
    title_div.classList.add("title-div");
    title_div.appendChild(name);


    let logo = document.createElement("img");
    logo.classList.add("github-logo");
    logo.setAttribute("src", i.logo);
    let logo_div = document.createElement("div");
    logo_div.classList.add("logo-div");

    let git_a = document.createElement("a");
    git_a.href = i.git_href;
    git_a.appendChild(logo);
    
    logo_div.appendChild(git_a);


    row.appendChild(title_div);
    row.appendChild(logo_div);
    project_container.appendChild(row);
    // description
    let type = document.createElement("h7");
    type.innerText = i.type;
    project_container.appendChild(type);
    // description
    let desc = document.createElement("h6");
    desc.innerText = i.desc;
    project_container.appendChild(desc);
    card.appendChild(project_container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };