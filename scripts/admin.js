import { baseUrl } from "./baseUrl.js";

let form = document.getElementById("form");

form.addEventListener("submit", function () {
    event.preventDefault();
    let title = form.title.value;
    let author = form.author.value;
    let category = form.category.value;
    let obj = {
        title,
        author,
        category,
        "isAvailable": true,
        "isVerified": false,
        "borrowedDays": null,
        "imageUrl": "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
    }

    // console.log(title)

    fetch(`${baseUrl}/books`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(() => {
            alert("Book Added Successfully");
        })
        .catch((err) => {
            alert("Something went wrong in adding book");
            console.log(err);
        });

    form.reset();

});

