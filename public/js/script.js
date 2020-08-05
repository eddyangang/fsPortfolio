$.get("/api/projects").then(data => {
    appendData(data)
    console.log(data)
})

function appendData (data) {
    const timeline_container = $(".cd-timeline__container")
    let id = 0
    data.forEach(element => {
        let block = 
`<div class="cd-timeline__block">
    <div class="cd-timeline__img cd-timeline__img--location">
        <img src="${element.image_icon}" alt="${element.title}">
    </div> <!-- cd-timeline__img -->

    <div class="cd-timeline__content text-component">
        <h2>${element.title}</h2>
        <img src="${element.image_path}" alt="${element.summary}">
        <p class ="my-2">
        <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#collaspe${id}"
        aria-expanded="false" aria-controls="collaspe${id}">
            Read more
         </button>`

        if (element.deployed_url) block += `<a href="${element.deployed_url}" class="btn btn-primary" target="_blank">Deployed Site</a>`

        if (element.github_url) block += `<a href="${element.github_url}" class="btn btn-secondary" target="_blank">Github</a>`

   
        block += 
        `</p>
        <div class="collapse" id="collaspe${id}">
            <div class="card card-body">
            ${element.summary}
            </div>
        </div>

    <div class="flex items-center">
        <span class="cd-timeline__date">${element.date}</span>
    </div>
    </div> <!-- cd-timeline__content -->
</div> <!-- cd-timeline__block -->`

        timeline_container.append(block)
        id ++
    });
}
