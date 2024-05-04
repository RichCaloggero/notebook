---
title: A Simple Accessible Notebook System
author: rjc
...

Security is nonexistant, so __do not execute notebooks from untrusted sources!__

- tab among cells
   + first tabstop in each cell is editable code; use standard platform editing keys
   + next tabstop is output for that cell
   + if contents have changed when you tab out of the input area, contents are recomputed and any output written to the output area
   + screen reader will read output since it gains keyboard focus


```
// I am a cell with containing code beginning with a comment
"hello"
```

The above cell contained code, but nothing was returned, so no output was generated.

To return a result, use the return keyword since cell computation is done via compiled function

```
return "hello world!"
```


use the log function to write to the output area. It takes a single string (use template strings to write multiple values)

```
a = 13;
b = 26;
log(`${a}, ${b}`);
return b/a;
```


The js exponentiation operator is written as follows:

```
b = 10;
e = 5;
return b ** e;
```

The uparrow flips bits:

```
return [
2^5,
7^2,
2^3
];	
```

The notebook remembers previous values (they are all global variables):

```
return [b, e];
```




