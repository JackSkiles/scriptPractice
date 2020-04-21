// const h1 = document.createElement('h1');
// h1.textContent = "Yeeeaaahhhh";
// document.body.appendChild(h1);
// header
// - h1
// - nav
//   - a
//   - a
const container = document.getElementById("container");

document.body.style.fontFamily = "sans-serif";

const header = document.createElement("header");
header.style.color = "white";
header.style.backgroundColor = "#65a6f3";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.padding = "0 20px";

const heading1 = document.createElement("h1");
heading1.textContent = "HighOnCoding";
heading1.style.paddingRight = "20px";
header.appendChild(heading1);

const heading2 = document.createElement("h1");
heading2.textContent = "";
header.appendChild(heading2);

const topNav = document.createElement("nav");
topNav.style.display = "flex";
topNav.style.alignItems = "center";
topNav.style.justifyContent = "space-around";
topNav.style.width = "70%";
header.appendChild(topNav);

const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "20px";
link1.style.color = "white";
link1.style.fontWeight = "bold";
link1.style.fontSize = "22px";
link1.style.textDecoration = "none";
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "22px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";
topNav.appendChild(link2);


container.appendChild(header);

const main = document.getElementById("main");

document.body.style.fontFamily = "sans-serif";

const div = document.createElement("main");
div.style.display = "flex";
div.style.margin = "10px 10px 0 10px";
div.style.backgroundColor = "#ccc";
div.style.justifyContent = "center";

const div2 = document.createElement("div");
div2.style.display= "flex";
div2.style.flexWrap = "wrap";
div2.style.width = "70%";
div.appendChild(div2);

const heading3 = document.createElement("h1");
heading3.style.display = "flex";
heading3.textContent = "Curse of the current Reviews";
div2.appendChild(heading3);

const p1 = document.createElement("p");
p1.style.display = "flex";
p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas porta ipsum, suscipit faucibus nunc congue nec. In consequat, massa a posuere volutpat, ex elit placerat justo, vel posuere dolor ligula in magna. Ut facilisis sem quis massa tristique, et dictum metus imperdiet. Donec ut purus massa. Mauris maximus quam rutrum, posuere sapien ac, ornare quam. Aenean volutpat mauris tincidunt malesuada ullamcorper. Vivamus elementum, arcu et posuere molestie, erat ligula lobortis diam, in convallis tellus elit pellentesque tortor. Nam feugiat elementum sem vitae gravida. Nullam a est id est faucibus venenatis. Donec luctus ac tortor nec maximus."
div2.appendChild(p1);


main.appendChild(div);


