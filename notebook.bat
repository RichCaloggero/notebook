@echo off
pandoc --defaults notebook.yaml %1 >%1.html
