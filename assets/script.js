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
        //Testimonials grid section
        title: 'Testimonials grid section',
        featuredImg: './testimonials-grid-section/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/testimonials-grid-section/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/testimonials-grid-section',
        level: 'junior'
    },
    {
        //QR code component
        title: 'QR code component',
        featuredImg: './qr-code-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/qr-code-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/qr-code-component',
        level: 'newbie'
    },
    {
        //NFT preview card component
        title: 'NFT preview card component',
        featuredImg: './nft-preview-card-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/nft-preview-card-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/nft-preview-card-component',
        level: 'newbie'
    },
    {
        //Order summary component
        title: 'Order summary component',
        featuredImg: './order-summary-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/order-summary-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/order-summary-component',
        level: 'newbie'
    },
    {
        //Stats preview card
        title: 'Stats preview card',
        featuredImg: './stats-preview-card/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/stats-preview-card/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/stats-preview-card',
        level: 'newbie'
    },
    {
        //3-column preview card
        title: '3-column preview card',
        featuredImg: './3-column-preview-card/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/3-column-preview-card/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/3-column-preview-card',
        level: 'newbie'
    },
    {
        //Profile card component
        title: 'Profile card component',
        featuredImg: './profile-card-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/profile-card-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/profile-card-component',
        level: 'newbie'
    },
    {
        //FAQ accordion card
        title: 'FAQ accordion card',
        featuredImg: './faq-accordion-card/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/faq-accordion-card/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/faq-accordion-card',
        level: 'newbie'
    },
    {
        //Social proof section
        title: 'Social proof section',
        featuredImg: './social-proof-section/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/social-proof-section/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/social-proof-section',
        level: 'newbie'
    },
    {
        //Article preview component
        title: 'Article preview component',
        featuredImg: './article-preview-component/design/desktop-preview.webp',
        technologies: ['html', 'css', 'js'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/article-preview-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/article-preview-component',
        level: 'newbie'
    }
];

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
                <img class="img" src="${solution.featuredImg}" alt="solution screenshot" loading="lazy">
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