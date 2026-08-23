function updateJsonOutput() 
{
    var rid = document.getElementById("r-id").value;
    var title = document.getElementById("title").value;
    var category = document.getElementById("category").value;
    var ingredients = document.getElementById("ingredients").value;
    var instructions = document.getElementById("instructions").value;
    var author = document.getElementById("author").value;
    var json = "{}";
    json = JSON.stringify({
        id: rid,
        title: title,
        category: category,
        ingredients: ingredients,
        instructions: instructions,
        author: author
    });
    document.getElementById("json-output").innerHTML = json;
}