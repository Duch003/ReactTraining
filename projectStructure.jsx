
//=====package.json=====
//Contains basic informations about application
// - name
// - version
// - dependencies - which points used by application all external sources
// - scirpts - shortcuts to use in the console

//During development we don't see compiled code because everything happens and runs in memory

//=====node_modules=====
//Holds all dependencies and subdependencies for the project
//It's created by defult by create react scripts

//=====public=====
//It's the root folder which gets served by the web server in the end
//It also contains index.html

//=====public/index.html=====
//Main thing to notice and remember is the div with id root
//Inside it react mounts all it's content

//=====public/manifest.json=====
//Contains metadata about application

//=====src=====
//Contains all raw code we work on. It also contains
//index.js, which file access index.html from public folder

//=====src/App.js=====
//In the tutorial app automaticly created by React
//this file is the module that contains all the code 
//visible on the main page. It's passed into index.js
//render method to be rendered by React in index.html

//=====src/registerServiceWorker.js=====
//This file is generated automaticly
//Pre-caches script files.
