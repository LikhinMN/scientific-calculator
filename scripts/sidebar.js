import {calculate} from './data/data.js'
const topicGrid=document.querySelector('.topic-grid');
let sidebarHTML='';
calculate.forEach((topic)=>{
  sidebarHTML+=`<div class="topics-container" data-title="${topic.title}">
            <div class="image">
              <img src="./image/chevron-down-svgrepo-com.svg" class="icon" />
            </div>
            <div class="topic-name">${topic.title}</div>
           
          </div>
           <div class="topic-operations">
            <ul class="operationss">
              ${topic.operations.map((op)=>`<li>${op}</li>`).join("")}
            </ul>
            </div>
          `
})
topicGrid.innerHTML=sidebarHTML;
const topicConatiner=document.querySelectorAll('.topics-container');
const topicOperation=document.querySelectorAll('.topic-operations ul');
topicConatiner.forEach((op)=>{
  op.nextElementSibling.firstElementChild.classList.remove('active');
  op.addEventListener('click',()=>{
   op.nextElementSibling.firstElementChild.classList.add('active');
  })
});