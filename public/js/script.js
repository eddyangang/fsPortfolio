const project1 = {
    name: "hello",
    summary:"this",
    image: "image here",
    date: new Date(2020, 3, 24)
}

console.log(project1);
$.post("/api/post", project1).then( () => console.log("post sent"))


$.get("/api/projects").then(data => console.log(data))