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
    {   //Advice generator app
        title: 'Advice generator app',
        featuredImg: './advice-generator-app/design/desktop-preview.webp',
        technologies: ['html', 'css', 'js', 'api'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/advice-generator-app/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/advice-generator-app',
        level: 'junior'
    },
    {   //Testimonials grid section
        title: 'Testimonials grid section',
        featuredImg: './testimonials-grid-section/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/testimonials-grid-section/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/testimonials-grid-section',
        level: 'junior'
    },
    {   //QR code component
        title: 'QR code component',
        featuredImg: './qr-code-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/qr-code-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/qr-code-component',
        level: 'newbie'
    },
    {   //NFT preview card component
        title: 'NFT preview card component',
        featuredImg: './nft-preview-card-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/nft-preview-card-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/nft-preview-card-component',
        level: 'newbie'
    },
    {   //Order summary component
        title: 'Order summary component',
        featuredImg: './order-summary-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/order-summary-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/order-summary-component',
        level: 'newbie'
    },
    {   //Product preview card component
        title: 'Product preview component',
        featuredImg: './product-preview-card-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/product-preview-card-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/product-preview-card-component',
        level: 'newbie'
    },
    {   //Stats preview card
        title: 'Stats preview card',
        featuredImg: './stats-preview-card/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/stats-preview-card/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/stats-preview-card',
        level: 'newbie'
    },
    {   //3-column preview card
        title: '3-column preview card',
        featuredImg: './3-column-preview-card/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/3-column-preview-card/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/3-column-preview-card',
        level: 'newbie'
    },
    {   //Profile card component
        title: 'Profile card component',
        featuredImg: './profile-card-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/profile-card-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/profile-card-component',
        level: 'newbie'
    },
    {   //FAQ accordion card
        title: 'FAQ accordion card',
        featuredImg: './faq-accordion-card/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/faq-accordion-card/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/faq-accordion-card',
        level: 'newbie'
    },
    {   //Social proof section
        title: 'Social proof section',
        featuredImg: './social-proof-section/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/social-proof-section/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/social-proof-section',
        level: 'newbie'
    },
    {   //Article preview component
        title: 'Article preview component',
        featuredImg: './article-preview-component/design/desktop-preview.webp',
        technologies: ['html', 'css', 'js'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/article-preview-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/article-preview-component',
        level: 'newbie'
    },
    {   //Fylo data storage component
        title: 'Fylo data storage component',
        featuredImg: './fylo-data-storage-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/fylo-data-storage-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/fylo-data-storage-component',
        level: 'junior'
    },
    {   //Pricing component with toggle
        title: 'Pricing component with toggle',
        featuredImg: './pricing-component-with-toggle/design/desktop-preview.webp',
        technologies: ['html', 'css', 'js'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/pricing-component-with-toggle/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/pricing-component-with-toggle',
        level: 'junior'
    },
    {   //Four card feature section
        title: 'Four card feature section',
        featuredImg: './four-card-feature-section/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/four-card-feature-section/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/four-card-feature-section',
        level: 'newbie'
    },
    {   //Base Apparel coming soon page
        title: 'Base Apparel coming soon page',
        featuredImg: './base-apparel-coming-soon/design/desktop-preview.webp',
        technologies: ['html', 'css', 'js'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/base-apparel-coming-soon/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/base-apparel-coming-soon',
        level: 'newbie'
    },
    {   //Intro component with sign-up form
        title: 'Intro component with sign-up form',
        featuredImg: './intro-component-with-signup/design/desktop-preview.webp',
        technologies: ['html', 'css', 'js'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/intro-component-with-signup/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/intro-component-with-signup',
        level: 'newbie'
    },
    {   //Single price grid component
        title: 'Single price grid component',
        featuredImg: './single-price-grid-component/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/single-price-grid-component/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/single-price-grid-component',
        level: 'newbie'
    },
    {   //Clipboard landing page
        title: 'Clipboard landing page',
        featuredImg: './clipboard-landing-page/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/clipboard-landing-page/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/clipboard-landing-page',
        level: 'junior'
    },
    {   //Ping coming soon page
        title: 'Ping coming soon page',
        featuredImg: './ping-coming-soon-page/design/desktop-preview.webp',
        technologies: ['html', 'css', 'js'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/ping-coming-soon-page/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/ping-coming-soon-page',
        level: 'newbie'
    },
    {   //Huddle landing page with alternating blocks
        title: 'Huddle landing page with alternating blocks',
        featuredImg: './huddle-landing-page-with-alternating-blocks/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/huddle-landing-page-with-alternating-blocks/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/huddle-landing-page-with-alternating-blocks',
        level: 'junior'
    },
    {   //Fylo data theme landing page
        title: 'Fylo data theme landing page',
        featuredImg: './fylo-dark-theme-landing-page/design/desktop-preview.webp',
        technologies: ['html', 'css', 'js'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/fylo-dark-theme-landing-page/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/fylo-dark-theme-landing-page',
        level: 'junior'
    },
    {   //Huddle landing page
        title: 'Huddle landing page',
        featuredImg: './huddle-landing-page/design/desktop-preview.webp',
        technologies: ['html', 'css'],
        liveURL: 'https://dewslyse.github.io/FEM_Solutions/huddle-landing-page/',
        sourceURL: 'https://github.com/dewslyse/FEM_Solutions/tree/main/huddle-landing-page',
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