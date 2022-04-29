// ! This is a example file, delete parts if they are not needed in your project
import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
// JSON (no files there yet, just for demonstration)
// import toml from './data.toml';
// import yaml from './data.yaml';
// import json from './data.json5';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const myIcon = new Image();
    const btn = document.createElement('button');

    element.classList.add("hello");
    element.innerHTML = myName('Steve'); 

    myIcon.src = Icon;
    element.appendChild(myIcon);
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    // Log the importet data
    console.log(Data);
    console.log(Notes);
    
    return element;
  }
  
  document.body.appendChild(component());

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`
console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`
console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`


// ? https://webpack.js.org/guides/getting-started/