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
        ID: rid,
        Title: title,
        Category: category,
        Ingredients: ingredients,
        Instructions: instructions,
        Author: author
    });
    document.getElementById("json-output").innerHTML = json;
}