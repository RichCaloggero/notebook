function compileFunction (text, parameter, environment = Math) {
globalEnvironment = environment;
let _function = null;

try {
return new Function (parameter, text);
//return new Function (parameter, `with (globalEnvironment) {${text}}`);

} catch (e) {
return (`${e};
${text}
`);
} // try

//console.debug("compile: ", text);
return _function;
} // compileFunction

