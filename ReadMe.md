# A Simple Accessible Literate Programming System

Notebook systems such as Jupyter and Observable are examples of literate programming, whereby code, documentation, and modifiable examples can all be written in one document. When run, the user can read the documentation, see examples of what is being documented, and modify and run any of the code on demand.

I have found accessibility of these systems to be poor, or nonexistant, so I wrote my own very simple browser-based literate programming system.

Here is the brief document explaining how to use it:

- [A notebook explaining how to use this notebook](https://richcaloggero.github.io/notebook/notebook.md.html)

Here is the source from which that was built:

- [Markdown source of the above notebook](https://raw.githubusercontent.com/RichCaloggero/notebook/master/notebook.md)

Pandoc is used to convert the markdown to HTML, merging it with two files of javascript code which run the cells. The pandoc command looks like this:

>pandoc --defaults notebook.yaml source.md -o source.html

The YAML file contains pandoc options which essentially add the two javascript files to the output HTML file:

```
include-in-header:
  - head.html
```



