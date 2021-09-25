const div = document.createElement("div");
div.className = "container";
const profile = document.createElement("img");
profile.className = "profile";
profile.setAttribute(
  "src",
  "https://starrgate.s3.amazonaws.com/users/50cd73216eeb6751058316f7b4e4f4461e13ad7d/profile_dLEJf4y.jpg"
);
div.appendChild(profile);
document.querySelector("body").appendChild(div);
const resumename = document.createElement("h1");
resumename.className = "name";
resumename.innerHTML = "BRAIN DUDEY";
document.querySelector("body").appendChild(resumename);



const div1 = document.createElement("div");
div1.className = "container1";
document.querySelector("body").appendChild(div1);


const div2 = document.createElement("div");
div2.className = "container2";
document.querySelector("body").appendChild(div2);



const div3 = document.createElement("div");
const address = document.createElement("small");
address.innerHTML =" N. Damen Avenue, Chicago 99999| 999-999-999 | hello@kickresume.com | www.kickresume.com";
div3.className = "container3";
address.className = "address";
div3.appendChild(address);
document.querySelector("body").appendChild(div3);


const line = document.createElement("div");
line.className = "centerliner";
document.querySelector("body").appendChild(line);


const profile3 = document.createElement("div");
const index1 = document.createElement("div");
const icon1 = document.createElement("i");
const title1 = document.createElement("small");
const para1 = document.createElement("p");
profile3.className = "content1";
index1.childNodes = "index1";
icon1.className = "icon1";
title1.className = "title1";
para1.className = "para1";
icon1.innerHTML = '<i class="fas fa-user-circle"></i>';
title1.innerHTML = "Profile<br/>";
para1.innerHTML ="Innovative optimized solution seeker. Exited to be  at the deployment<br/>phase of my new career as a web developer. I am ambitious,<br/>adventures assiduous, animated, and an alliteration advocate. ";
profile3.appendChild(index1);
index1.appendChild(icon1);
index1.appendChild(title1);
index1.appendChild(para1);
document.querySelector("body").appendChild(profile3);


const skills = document.createElement("div");
const index2 = document.createElement("div");
const icon2 = document.createElement("i");
const title2 = document.createElement("small");
const skill = document.createElement("h3");
skills.className = "content2";
index2.className = "index2";
icon2.className = "icon2";
title2.className = "title2";
skill.className = "skill";
icon2.innerHTML = ' <i class="fas fa-flask"></i>';
title2.innerHTML = "Skills";
skill.innerHTML = "TECHNICAL SKILLS";
skills.appendChild(index2);
index2.appendChild(icon2);
index2.appendChild(title2);
index2.appendChild(skill);
document.querySelector("body").appendChild(skills);


const js = document.createElement("div");
const javascript = document.createElement("label");
const range1 = document.createElement("input");
js.className = "course";
javascript.className = "javascript";
range1.className = "range1";
range1.type = "range";
range1.value = "80";
range1.style.marginLeft = "350px";
range1.disabled = "disabled";
javascript.innerHTML = "JavaScript ";
js.appendChild(javascript);
js.appendChild(range1);
document.querySelector("body").appendChild(js);


const css = document.createElement("div");
const CSS = document.createElement("label");
const range2 = document.createElement("input");
css.className = "course1";
CSS.className = "css";
range2.className = "range1";
range2.type = "range";
range2.style.marginLeft = "350px";
range2.value = "80";
range2.disabled = "disabled";
CSS.innerHTML = "CSS";
css.appendChild(CSS);
css.appendChild(range2);
document.querySelector("body").appendChild(css);


const html = document.createElement("div");
const HTML = document.createElement("label");
const range3 = document.createElement("input");
html.className = "course2";
HTML.className = "html";
range3.className = "range1";
range3.type = "range";
range3.style.marginLeft = "350px";
range3.value = "50";
range3.disabled = "disabled";
HTML.innerHTML = "HTML";
html.appendChild(HTML);
html.appendChild(range3);
document.querySelector("body").appendChild(html);



const react = document.createElement("div");
const React = document.createElement("label");
const range4 = document.createElement("input");
react.className = "course3";
React.className = "react";
range4.className = "range1";
range4.type = "range";
range4.style.marginLeft = "350px";
range4.value = "50";
range4.disabled = "disabled";
React.innerHTML = "React";
react.appendChild(React);
react.appendChild(range4);
document.querySelector("body").appendChild(react);


const redux = document.createElement("div");
const Redux = document.createElement("label");
const range5 = document.createElement("input");
redux.className = "course4";
Redux.className = "redux";
range5.className = "range1";
range5.type = "range";
range5.style.marginLeft = "350px";
range5.value = "50";
range5.disabled = "disabled";
Redux.innerHTML = "Redux";
redux.appendChild(Redux);
redux.appendChild(range5);
document.querySelector("body").appendChild(redux);



const mongo = document.createElement("div");
const Mongo = document.createElement("label");
const range6 = document.createElement("input");
mongo.className = "course5";
Mongo.className = "mongo";
range6.className = "range1";
range6.type = "range";
range6.style.marginLeft = "350px";
range6.value = "70";
range6.disabled = "disabled";
Mongo.innerHTML = "Mongo";
mongo.appendChild(Mongo);
mongo.appendChild(range6);
document.querySelector("body").appendChild(mongo);



const deployment = document.createElement("div");
const Deployment = document.createElement("label");
const range7 = document.createElement("input");
deployment.className = "course6";
Deployment.className = "deployment";
range7.className = "range1";
range7.type = "range";
range7.style.marginLeft = "350px";
range7.value = "50";
range7.disabled = "disabled";
Deployment.innerHTML = "Deployment";
deployment.appendChild(Deployment);
deployment.appendChild(range7);
document.querySelector("body").appendChild(deployment);


const AddSkill = document.createElement("h5");
AddSkill.className = "addskill";
AddSkill.innerHTML = "Additional Skills";
document.querySelector("body").appendChild(AddSkill);



const pm = document.createElement("div");
ProjectManagement = document.createElement("label");
const range8 = document.createElement("input");
pm.className = "course7";
ProjectManagement.className = "ProjectManagement";
range8.className = "range1";
range8.style.marginLeft = "250px";
range8.type = "range";
range8.value = "100";
range8.disabled = "disabled";
ProjectManagement.innerHTML = "Project Management";
pm.appendChild(ProjectManagement);
pm.appendChild(range8);
document.querySelector("body").appendChild(pm);



const req = document.createElement("div");
const Requirement = document.createElement("label");
const range9 = document.createElement("input");
req.className = "course8";
Requirement.className = "requirement";
range9.className = "range1";
range9.type = "range";
range9.style.marginLeft = "320px";
range9.value = "70";
range9.disabled = "disabled";
Requirement.innerHTML = "Requirement";
req.appendChild(Requirement);
req.appendChild(range9);
document.querySelector("body").appendChild(req);



const bussdev = document.createElement("div");
const BusinessDevelopment = document.createElement("label");
const range10 = document.createElement("input");
bussdev.className = "course9";
BusinessDevelopment.className = "businessdevelopment";
range10.className = "range1";
range10.type = "range";
range10.style.marginLeft = "240px";
range10.value = "100";
range10.disabled = "disabled";
BusinessDevelopment.innerHTML = "BusinessDevelopment";
bussdev.appendChild(BusinessDevelopment);
bussdev.appendChild(range10);
document.querySelector("body").appendChild(bussdev);


const edit = document.createElement("div");
const Editing = document.createElement("label");
const range11 = document.createElement("input");
edit.className = "course10";
Editing.className = "editing";
range11.className = "range1";
range11.type = "range";
range11.style.marginLeft = "380px";
range11.value = "70";
range11.disabled = "disabled";
Editing.innerHTML = "Editing";
edit.appendChild(Editing);
edit.appendChild(range11);
document.querySelector("body").appendChild(edit);


const fundrasing = document.createElement("div");
const Fundraising = document.createElement("label");
const range12 = document.createElement("input");
fundrasing.className = "course11";
Fundraising.className = "fundraising";
range12.className = "range1";
range12.type = "range";
range12.style.marginLeft = "340px";
range12.value = "100";
range12.disabled = "disabled";
Fundraising.innerHTML = "Fundraising";
fundrasing.appendChild(Fundraising);
fundrasing.appendChild(range12);
document.querySelector("body").appendChild(fundrasing);



const Experience = document.createElement("div");
const index3 = document.createElement("div");
const icon3 = document.createElement("i");
const title3 = document.createElement("small");
Experience.className = "content3";
icon3.className = "icon3";
title3.className = "title3";
index3.className = "index3";
icon3.innerHTML = ' <i class="fas fa-briefcase"></i>';
title3.innerHTML = "Experience";
Experience.appendChild(index3);
index3.appendChild(icon3);
index3.appendChild(title3);
document.querySelector("body").appendChild(Experience);



const eventmanager = document.createElement("h5");
const date = document.createElement("small");
const company = document.createElement("small");
eventmanager.className = "position";
company.className = "company";
date.className = "date";
eventmanager.innerHTML = " Event Manager";
date.innerHTML = "03/2014-02/2017<br/>";
company.innerHTML = " C3 Presents, Washington DC";
document.querySelector("body").appendChild(eventmanager);
document.querySelector("body").appendChild(date);
document.querySelector("body").appendChild(company);



const ul = document.createElement("ul");
const li = document.createElement("li");
li.className = "li";
ul.className = "ul";
li.innerHTML =" Lead and execute all phases of event planning and production<br />spanning committee recruitment, training vendor relationships and<br /> on-site facilitation";
ul.appendChild(li);
const li2 = document.createElement("li");
li2.className = "li";
li2.innerHTML ="Brought new business to the organization through<br /> relentless network and stewardship which helped <br /> the company win the bid for the State Department<br /> Summit on the Middle East and, the companies largest <br /> civic event to date the United State of Women<br />";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.className = "li";
li3.innerHTML ="Exercise fiscal control over budget creation tracking andreporting.<br />Collaborate with employee at all organization levels to advance<br />cohesive operations<br />";
ul.appendChild(li3);
document.querySelector("body").appendChild(ul);



const content4 = document.createElement("div");
const index4 = document.createElement("div");
const icon4 = document.createElement("i");
const title4 = document.createElement("small");
content4.className = "content4";
icon4.className = "icon4";
title4.className = "title4";
index4.className = "index4";
icon4.innerHTML = ' <i class="fas fa-briefcase"></i>';
title4.innerHTML = "Experience";
content4.appendChild(index4);
index4.appendChild(icon4);
index4.appendChild(title4);
document.querySelector("body").appendChild(content4);



const rightside = document.createElement("div");
const position1 = document.createElement("h5");
const date1 = document.createElement("small");
const company1 = document.createElement("small");
rightside.className = "right";
position1.className = "position1";
company1.className = "company1";
date1.className = "date1";
position1.innerHTML = "Community Relations Manager";
date1.innerHTML = "06/2011-01/2014<br/>";
company1.innerHTML = " Gay & Lesbian Elder Housing, Los Angeles ";
rightside.appendChild(position1);
rightside.appendChild(date1);
rightside.appendChild(company1);
document.querySelector("body").appendChild(rightside);




const ul01 = document.createElement("ul");
const li01 = document.createElement("li");
li01.className = "li01";
ul01.className = "ul01";
li01.innerHTML = "Arranging presentations and pitch deck. ";
ul01.appendChild(li01);
const li02 = document.createElement("li");
li02.className = "li02";
li02.innerHTML ="Designing a PR Plan and establishing<br />important focus points. ";
ul01.appendChild(li02);
const li03 = document.createElement("li");
li03.className = "li03";
li03.innerHTML =
  " Designing, creating and managing content <br />across multiple communication platforms";
ul01.appendChild(li03);
const li04 = document.createElement("li");
li04.className = "li04";
li04.innerHTML = " Building relationship with key media players...";
ul01.appendChild(li04);
document.querySelector("body").appendChild(ul01);



const education = document.createElement("div");
const index5 = document.createElement("div");
const icon5 = document.createElement("i");
const title5 = document.createElement("small");
education.className = "content5";
icon5.className = "icon5";
title5.className = "title5";
index5.className = "index5";
icon5.innerHTML = '  <i class="fas fa-graduation-cap"></i>';
title5.innerHTML = "Education";
education.appendChild(index5);
index5.appendChild(icon5);
index5.appendChild(title5);
document.querySelector("body").appendChild(education);



const rightside1 = document.createElement("div");
const position2 = document.createElement("h5");
const date2 = document.createElement("small");
const company2 = document.createElement("small");
rightside1.className = "right1";
position2.className = "position2";
company2.className = "company2";
date2.className = "date2";
position2.innerHTML = "Engineering Immersion Program";
date2.innerHTML = "11/2018-06/2018<br/>";
company2.innerHTML = " Thinkful, Chicaho, IL ";
rightside1.appendChild(position2);
rightside1.appendChild(date2);
rightside1.appendChild(company2);
document.querySelector("body").appendChild(rightside1);



const ul001 = document.createElement("ul");
const li001 = document.createElement("li");
li001.className = "li001";
ul001.className = "ul001";
li001.innerHTML ="Developed a full-stack web application,<q>RenewU</q>,using React<br />Users to explore various aspects of meditation. User's Progressis<br />stored on a backend created using Node and MongoDB.";
ul001.appendChild(li001);
const li002 = document.createElement("li");
li002.className = "li002";
li002.innerHTML =" Developed a language learning app,<q>Foodie phonetics</q> using<br />spaced repetition and a linked list data structure. React wasused<br />to create the front end components while Node and Mongo were used<br />to create a backend that stores user data";
ul001.appendChild(li002);
const li003 = document.createElement("li");
li003.className = "li003";
li003.innerHTML =
  "  Developed a concierge app, <q>pley</q>, for individuals looking  <br/>forcurated suggestions when visiting a new place.React was  <br/>used to develop the font end which includes real-time chat,  drag <br/>and dropand variety of advanced features.  The backend built <br/> using Node,Express, and Mongo, takes advantages of well-developed <br/>Restful API,Geospatial searching,and user authentication with JWT.";
ul001.appendChild(li003);
document.querySelector("body").appendChild(ul001);


const footer = document.createElement("div");
const Degree = document.createElement("strong");
const Date3 = document.createElement("small");
const college = document.createElement("strong");
footer.className = "content6";
Degree.className = "degree";
Date3.className = "date3";
college.className = "college";
Degree.innerHTML = "BA, English";
Date3.innerHTML = "09/2001-09/2005<br/>";
college.innerHTML = " University of California, Los Angles";
footer.appendChild(Degree);
footer.appendChild(Date3);
footer.appendChild(college);
document.querySelector("body").appendChild(footer);
