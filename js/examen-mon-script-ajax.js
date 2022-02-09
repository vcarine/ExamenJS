let bBody = $("body");

$.ajax({
    url: "https://jsonplaceholder.typicode.com/photos/1",
    type: "GET",
    dataType : "json",
})

    .done(function(photo) {
        bBody.prepend(`<img src="${photo.url}" alt="${photo.title}"></img>`);
    })