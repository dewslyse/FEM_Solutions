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

//Add projects dynamically to page
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
    }
];