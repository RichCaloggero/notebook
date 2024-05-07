window.addEventListener("load", () => {
const cellMap = new Map();

document.querySelectorAll("pre code").forEach(x => {
x.parentElement.setAttribute("class", "cell");
x.setAttribute("contenteditable", "true");
x.setAttribute("tabindex", "0");
x.insertAdjacentHTML("afterEnd",
`<div tabindex="0" class="output" aria-live="off" aria-atomic="true"></div>
`);
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
//console.debug("compileAndRun: ", sourceCode(cell));
const f = compileFunction(sourceCode(cell), "cell", math);
if (f instanceof Function) {
let result;
window.cellLog = "";
display(cell, "");
try {
result = f();
if (result === undefined) result = "";
//console.debug("after f(): ", window.cellLog, result);
} catch (e) {
result = e;
} // try

display(cell, window.cellLog + result.toString());
  
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

function log (message) {
//console.debug("log: ", cellLog, message);
cellLog = `${cellLog}\n${message}\n`;
} // log

function diff(expression, variable) {
const expr = math.parse(expression);
return math.derivative(expr, variable);
} // diff
