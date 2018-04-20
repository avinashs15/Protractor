# Protractor
This sample piece of framework is written using Protractor and some npm modules.
User needs to install all the required modules before Execution.
the conf.js is the starting point which controles the execution of the test cases

How to start with installation and write first test case : https://docs.google.com/document/d/1GDFc77rex-Fqf1B8wosrxk1DePe4qt7-HzpZxyzXzeI/edit

User needs to install the packages specified in the ../FunctionalTests/package.json file

Features of the framework
1. Reporting using protractor-pretty-html-reporter which automatically generates an html reporter and the report will be generated under ./FunctionalTests/src/tests/Execution Results folder
2.  Utilities.js has many time bond, string manipulation, random generators , csv and json utilities, browser switch tabs etc
3. Page object model implementation : All the pages will be under ./FunctionalTests/src/tests/Pages and the spec files will be under ./FunctionalTests/src/tests/Specs
