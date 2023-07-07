import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

let output = '';
const sentence = "I'm something of a developer myself";

for (let i = sentence.length-1; i >= 0; i--) {
  output += `<div class="letter">${sentence[i]}</div>`;
}

document.querySelector('#app').innerHTML = `
<div class="container">
${output}
</div>


<form>
  <input>
</form>
`

setupCounter(document.querySelector('#counter'))
