import {calculate} from './data/data.js'
const cardgrid = document.querySelector(".calculate-grid");
let cardHTML = "";
calculate.forEach((card) => {
  cardHTML += `  <div class="calc-card">
    <div class="card-title">${card.title}</div>
    <div class="card-details">
      <ul>
        ${card.operations.map((op) => `<li>${op}</li>`).join("")}
      </ul>
    </div>
      <div class="card-link"><img src="./image/link-square-02-solid-standard.svg" alt=""></div> 
</div>
  `;
});

cardgrid.innerHTML = cardHTML;

