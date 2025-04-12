fetch("projects.json")
  .then(function (myresponse) {
    return myresponse.json();
  })
  .then(function (mydata) {
    let project = document.getElementById("project");

    mydata.forEach(function (projectItem) {
      let projectlist = document.createElement("div");
      // projectlist.style.backgroundColor = 'red';

      // Image
      let img = document.createElement("img");
      img.classList.add("p-img");
      img.src = projectItem.image;
      img.alt = projectItem.title;

      // Hr-line
      let hrline = document.createElement("hr");
      hrline.classList.add("hrline");

      // Title
      let title = document.createElement("h1");
      title.classList.add("p-title");
      title.textContent = projectItem.title;

      // Paragraph
      let para = document.createElement("p");
      para.classList.add("p-para");
      para.textContent = projectItem.description;

      // // TechStack
      // let techstack = document.createElement('p');
      // techstack.classList.add('p-techstack');
      // techstack.textContent = projectItem.techStack.join(', ');


      // Button div
      let buttondiv = document.createElement("div");
      buttondiv.classList.add("buttondiv");

      let gitbtn = document.createElement("a");
      gitbtn.classList.add("gitbtn");
      gitbtn.textContent = "GitHub";
      gitbtn.href = projectItem.github;
      gitbtn.target = "_blank";

      let livebtn = document.createElement("a");
      livebtn.classList.add("livebtn");
      livebtn.textContent = "Live";
      livebtn.href = projectItem.live;
      livebtn.target = "_blank";

      buttondiv.appendChild(gitbtn);
      buttondiv.appendChild(livebtn);

      // Append all
      projectlist.appendChild(img);
      projectlist.appendChild(hrline);
      projectlist.appendChild(title);
      projectlist.appendChild(para);
      // projectlist.appendChild(techstack);
      projectlist.appendChild(buttondiv);

      project.appendChild(projectlist);
    });
  });
