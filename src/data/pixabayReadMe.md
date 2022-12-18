Search Images GET https://pixabay.com/api/ Parameters key (required) str Your API key: 32148291-f9daa6b0a4ebde44950954495 q str A URL encoded search term. If omitted, all images are returned. This value may not exceed 100 characters. Example: "yellow+flower" lang str Language code of the language to be searched in. Accepted values: cs, da, de, en, es, fr, id, it, hu, nl, no, pl, pt, ro, sk, fi, sv, tr, vi, th, bg, ru, el, ja, ko, zh Default: "en" id str Retrieve individual images by ID. image_type str Filter results by image type. Accepted values: "all", "photo", "illustration", "vector" Default: "all" orientation str Whether an image is wider than it is tall, or taller than it is wide. Accepted values: "all", "horizontal", "vertical" Default: "all" category str Filter results by category. Accepted values: backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music min_width int Minimum image width. Default: "0" min_height int Minimum image height. Default: "0" colors str Filter images by color properties. A comma separated list of values may be used to select multiple properties. Accepted values: "grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown" editors_choice bool Select images that have received an Editor's Choice award. Accepted values: "true", "false" Default: "false" safesearch bool A flag indicating that only images suitable for all ages should be returned. Accepted values: "true", "false" Default: "false" order str How the results should be ordered. Accepted values: "popular", "latest" Default: "popular" page int Returned search results are paginated. Use this parameter to select the page number. Default: 1 per_page int Determine the number of results per page. Accepted values: 3 - 200 Default: 20 callback string JSONP callback function name pretty bool Indent JSON output. This option should not be used in production. Accepted values: "true", "false" Default: "false" Example

Retrieving photos of "yellow flowers". The search term q needs to be URL encoded: https://pixabay.com/api/?key=32148291-f9daa6b0a4ebde44950954495&q=yellow+flowers&image_type=photo

Response for this request:

    {
    "total": 4692,
    "totalHits": 500,
    "hits": [
        {
            "id": 195893,
            "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/",
            "type": "photo",
            "tags": "blossom, bloom, flower",
            "previewURL": "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
            "previewWidth": 150,
            "previewHeight": 84,
            "webformatURL": "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 360,
            "largeImageURL": "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
            "fullHDURL": "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
            "imageURL": "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
            "imageWidth": 4000,
            "imageHeight": 2250,
            "imageSize": 4731420,
            "views": 7671,
            "downloads": 6439,
            "likes": 5,
            "comments": 2,
            "user_id": 48777,
            "user": "Josch13",
            "userImageURL": "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
        },
        {
            "id": 73424,
            ...
        },
        ...
    ]
    }
