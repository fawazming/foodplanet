$(document).ready(function () {
    const url = 'https://galleria.sgm.ng/mi8r7e24L8DZnYxX6';
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            // Assuming the response is an array of URLs
            const dynamicSrcArray = data; // Adjust this based on the actual response structure
            const items = [];

            // Dynamically add items from the dynamicSrcArray, excluding the first two items
            dynamicSrcArray.slice(2).forEach((url, index) => {
                items.push({
                    src: url,
                    // title: `Dynamic item ${index + 3}`, // Start numbering from 3 to account for excluded items
                });
            });
            
            Demo_Images_Videos(items);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(`Error fetching data: ${textStatus} - ${errorThrown}`);
        }
    });

    function Demo_Images_Videos(it) {
        const items = it;



        $("#nanogallery2").nanogallery2({

            // CONTENT SOURCE
            items: items,
            itemsBaseURL: 'https://nanogallery2.nanostudio.org/samples/',

            // GALLERY AND THUMBNAIL LAYOUT
            galleryDisplayMode: 'fullContent',
            gallerySorting: 'random',


            // thumbnail
            thumbnailHeight: 200, thumbnailWidth: 350,
            thumbnailGutterWidth: 2,
            thumbnailGutterHeight: 2,
            thumbnailBorderHorizontal: 0,
            thumbnailBorderVertical: 0,

            thumbnailAlignment: 'fillWidth',

            // THUMBNAIL TOOLS & LABEL
            thumbnailToolbarImage: null,
            thumbnailToolbarAlbum: null,
            thumbnailLabel: { display: true, position: 'overImageOnBottom', hideIcons: true, titleFontSize: '2em', align: 'center', titleMultiLine: true, displayDescription: false },

            // DISPLAY ANIMATION
            thumbnailL1DisplayTransition: 'flipUp',         // first level display animation
            thumbnailDisplayTransition: 'slideDown',        // other levels display animation
            thumbnailDisplayTransitionDuration: 500,
            thumbnailDisplayInterval: 30,

            // THUMBNAIL'S HOVER ANIMATION
            // first level
            thumbnailBuildInit2: 'title_font-weight_bold',
            thumbnailHoverEffect2: 'imageBlurOff',
            // other levels -> no hover effect
            // touch handling
            touchAnimation: false,
            touchAutoOpenDelay: 800,

            // GALLERY THEME
            galleryTheme: {
                thumbnail: { titleShadow: '', descriptionShadow: 'none', titleColor: '#fff', borderColor: '#000' },
                navigationBreadcrumb: { background: '#3C4B5B' },
            },

            // DEEP LINKING
            locationHash: false
        });
    }



});