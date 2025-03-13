const cardgrid = document.querySelector(".calculate-grid");
export const calculate = [
  {
    title: "Basic",
    operations: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Remainder",
      "Square Root",
      "Exponentiation",
      "Logarithm",
      "Factorial",
      "Square",
    ],
  },
  {
    title: "Trigonometry",
    operations: [
      "Sine",
      "Cosine",
      "Tangent",
      "Cosecant",
      "Secant",
      "Cotangent",
    ],
  },
  {
    title: "Statistics",
    operations: [
      "Mean",
      "Median",
      "Mode",
      "Range",
      "Standard Deviation",
      "Variance",
      "Sum",
      "Product",
    ],
  },
  {
    title: "Matrix",
    operations: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Scalar Multiplication",
      "Transpose",
      "Determinant",
      "Inverse",
      "Eigenvalues",
      "Eigenvectors",
    ],
  },
  {
    title: "Algebra",
    operations: [
      "Solving Linear Equations",
      "Solving Quadratic Equations",
      "Polynomial Equations",
      "Exponentiation",
      "Simplifying Radicals",
      "Rational Exponents",
      "Solving Systems of Equations",
      "Solving Inequalities",
      "Evaluating Functions",
    ],
  },
  {
    title: "Calculus",
    operations: [
      "Limits",
      "Derivatives",
      "Integrals",
      "Definite Integrals",
      "Indefinite Integrals",
      "Infinite Series",
      "Taylor Series",
      "Maclaurin Series",
      "L'Hopital's Rule",
      "Differential Equations",
      "Vector Calculus",
      "Gradient",
      "Divergence",
      "Curl",
    ],
  },
  {
    title: "Number Systems",
    operations: [
      "Binary to Decimal",
      "Decimal to Binary",
      "Binary to Octal",
      "Octal to Binary",
      "Binary to Hexadecimal",
      "Hexadecimal to Binary",
      "Decimal to Octal",
      "Octal to Decimal",
      "Decimal to Hexadecimal",
      "Hexadecimal to Decimal",
      "Octal to Hexadecimal",
      "Hexadecimal to Octal",
    ],
  },
];

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
