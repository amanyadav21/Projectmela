// fetch("projects.json")
//   .then(function (myresponse) {
//     return myresponse.json();
//   })

//   .then(function (mydata) {
//     mydata.forEach(function (projectItem) {
//         // Main Container
//       let project = document.querySelector("#project");

//     //   Project ke liye div
//       let projectlist = document.querySelector("#projectlist");

//       let img = document.querySelector("#project-img")
//       img.src = projectItem.
      
//       let title = document.querySelector("#project-title");
//       let para = document.querySelector("#project-p");

//       let gitbtn = document.querySelector("#github-btn");
//       let livebtn = document.querySelector("#live-btn");
//     });
//   });


fetch("projects.json")
  .then(function (myresponse) {
    return myresponse.json();
  })
  .then(function (mydata) {
    let project = document.querySelector("#project");

    mydata.forEach(function (projectItem) {
      // Create parent div for each project
      let projectlist = document.createElement("div");
      projectlist.classList.add("projectlist");

      // Create and set image
      let img = document.createElement("img");
      img.src = projectItem.image;
      img.alt = projectItem.title;
      img.classList.add("project-img");

      // Create and set title
      let title = document.createElement("h1");
      title.innerText = projectItem.title;
      title.classList.add("project-title");

      // Create and set paragraph
      let para = document.createElement("p");
      para.innerText = projectItem.description;
      para.classList.add("project-p");

      // Create button container
      let buttonBox = document.createElement("div");
      buttonBox.classList.add("button-class");

      // GitHub button
      let gitbtn = document.createElement("button");
      gitbtn.innerText = "GitHub";
      gitbtn.onclick = function () {
        window.open(projectItem.github, "_blank");
      };

      // Live button
      let livebtn = document.createElement("button");
      livebtn.innerText = "Live Demo";
      livebtn.onclick = function () {
        window.open(projectItem.live, "_blank");
      };

      // Add buttons to button box
      buttonBox.appendChild(gitbtn);
      buttonBox.appendChild(livebtn);

      // Append everything to projectlist div
      projectlist.appendChild(img);
      projectlist.appendChild(title);
      projectlist.appendChild(para);
      projectlist.appendChild(buttonBox);

      // Finally add projectlist to main container
      project.appendChild(projectlist);
    });
  });
