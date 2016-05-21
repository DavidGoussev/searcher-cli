#searcher-cli
==========

A simple command line interface (cli) that quickly searches all text in files in current directory, then outputs results and and hit context.

## How It Works/What is it?  
Quickly identify relevant files in directory based on keyword searching.

## Implementation
Install via `npm install --global searcher-cli`

**EXAMPLE:**
Use `searcher` command in console with the desired searchterm as argument.  Colon-delimited results output consists of filename, hit line, and hit context.


     $ searcher filename
     ./README.md:5:searcher searches text in all files in current directory for specified searchterm.


Written by David Goussev (@dpg5000); http://www.github.com/dpg5000
