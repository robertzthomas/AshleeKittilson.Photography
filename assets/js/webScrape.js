function getImageSources(url){
    var imgs;
    var titleImageSources = [];
    var innerImageSources = [];
    fetch('https://ashleekittilson6975.smugmug.com/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // Get the HTML content as text
    })
    .then(html => {
        // You can now work with the HTML content here
        imgs = document.getElementsByTagName("img");
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}