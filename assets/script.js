import femSolutions from "./solutions.js";

//Filter by difficulty
$(document).ready(function () {
    $(".level").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".solution").show();
        } else {
            $(".solution").not("." + value).hide();
            $(".solution").filter("." + value).show();
        }
    })

    $(".level").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
})

//Technologies
const techs = (techs) => {
    return `
      <div class="technology">
            ${techs.map((tech) => `<span class="${tech}">${tech.toUpperCase()}</span>`).join('')}
      </div>
    `;
}

//Add projects dynamically to page
const solutions = (solution) => {
    return `
        <article class="solution ${solution.level}">
            <div class="screenshot">
                <img class="img" src="${solution.featuredImg}" alt="solution screenshot">
            </div>
            <div class="solution-details">
                ${techs(solution.technologies)}
                <h2 class="solution-title">${solution.title}</h2>
                <div class="links">
                    <a class="solution-btn" href="${solution.liveURL}"
                        target="_blank" rel="noreferrer">See solution
                    </a>
                    <a class="repo" href="${solution.sourceURL}"
                        target="_blank" aria-label="github repository" rel="noreferrer">
                        <i class="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </div>
        </article>
    `;
}

const solutionSection = document.querySelector('.solutions-section');

solutionSection.innerHTML = `
    ${femSolutions.map(solutions).join('')}
`;