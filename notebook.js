window.addEventListener("load", () => {
const cellMap = new Map();

document.querySelectorAll("code").forEach(x => {
x.setAttribute("contenteditable", "true");
x.setAttribute("tabindex", "0");
x.insertAdjacentHTML("afterEnd",
`<div tabindex="0" class="output" aria-live="off" aria-atomic="true"></div>
`);
x.parentElement.setAttribute("class", "cell");
});

for (const cell of [...document.querySelectorAll(".cell")]) {
cellMap.set(cell, {
sourceCode: sourceCode(cell)
});
} // for

document.body.addEventListener("focusout", e => {
const cell = e.target.parentElement;
if (cell.matches(".cell") && sourceCode(cell) !== cellMap.get(cell).sourceCode) {
compileAndRun(cell);
cellMap.get(cell).sourceCode = sourceCode(cell);
} // if
});

for (const entry of cellMap) compileAndRun(entry[0]);

});

function compileAndRun (cell) {
console.debug("compileAndRun: ", sourceCode(cell));
const f = compileFunction(sourceCode(cell), "x");
if (f instanceof Function) {
let result;
try {
result = f();
} catch (e) {
result = e;
} // try

display(cell, result? result.toString() : "undefined");
  
} else {
display(cell, f);
} // if
} // compileAndRun

function sourceCode (cell) {
return cell.matches(".cell")?
cell.querySelector("code").textContent
: "";
} // sourceCode

function display (cell, text) {
cell.querySelector(".output").textContent = text;
} // display
