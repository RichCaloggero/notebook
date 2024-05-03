function compileFunction (text, parameter, environment = {}) {
let _function = null;

try {
return new Function (parameter, text);

} catch (e) {
return (`${e};
${text}
`);
} // try

//console.debug("compile: ", text);
return _function;
} // compileFunction

