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

//Solutions
const femSolutions = [
    {
        //QR code component
        title: 'QR code component',
        featuredImg: './qr-code-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/qr-code-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/qr-code-component'
    },
    {
        //NFT preview card component
        title: 'NFT preview card component',
        featuredImg: './nft-preview-card-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/nft-preview-card-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/nft-preview-card-component'
    },
    {
        //Article preview component
        title: 'Article preview component',
        featuredImg: './article-preview-component/design/desktop-preview.webp',
        technologies: ['html', 'css', 'JS'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/article-preview-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/article-preview-component'
    }
];

//Technologies
function techs(techs) {
    return `
      <div class="technology">
        ${techs.map((tech) => `
            <span class="html">${tech}</span>
            <span class="css">${tech}</span>
            <span class="javascript">${tech}</span>`).join('')}
      </div>
    `;
}

//Add projects dynamically to page
function solutions(solution) {
    return `
        <div class="solution newbie">
            <div class="screenshot">
                <img src="${solution.featuredImg}" alt="solution screenshot" loading="lazy">
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
        </div>
    `;
}

const solutionSection = document.querySelector('.solutions-section');

solutionSection.innerHTML = `
    ${femSolutions.map(solutions).join('')}
`;