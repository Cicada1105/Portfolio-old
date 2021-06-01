### Josh Colvin Portfolio README
---
Central hub for displaying my professional and personal projects

#### Requirements
---
**npm** - Running project locally (Install [Node][NodeJS] on your system)
#### Project Notes
---
This project will change in the near future. UI will be updated to be more user friendly and projects may be handled differently

#### Front-end compiling
---
Visit my site via [link][website]
\-&nbsp; Or &nbsp;-
Donwload locally
```
git clone https://github.com/Cicada1105/Portfolio
cd ./Portfolio
npm install
npm start
```

#### Files & Directories
---
- node_modules/
    - Contains necessary ReactJS dependencies to run project
- public/
    - Contains html file that includes compiled JS script provided by running React project, manifest.json for meta data and robots.txt.
- src/
    - ./Component/
        - ./bg/
             - Files for displaying static background
        - ./pgs/
     - Filess for defining section/page components
    - ./index.jsx
	    - Initializes application, handles global context and user interaction, and renders it to DOM
	- ./context.jsx
   - Global context and reducer definition 

#### Design Notes
---
**Note** The current state of the project UI will most likely change in the future. The sections will be divided up into their own pages, fully utilizing Reacts BrowserRouter. Swapping over to individual pages is likely to result in no longer needing the React hook useContext and useReducer

#### Credits
---
**Designer and Developer**: Josh Colvin ([Cicada1105][github])

[website]: https://josh-colvin-portfolio.herokuapp.com/
[NodeJS]:https://nodejs.org/en/
[github]: https://github.com/Cicada1105?tab=repositories\