import { baseUrl } from "./baseUrl.js";

let form = document.getElementById("form");

getData();

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

async function getData() {
    try {
        let res = await fetch(`${baseUrl}/books`);
        console.log(res);
        let data = await res.json();
        displayBooks(data);
        // console.log(data);
    } catch (err) {
        console.log(err);
    }
}

let cont = document.getElementById("cont");

function displayBooks(arr) {
    let card = document.createElement("div")

    arr.map((el, i) => {
        let title = document.createElement("h3");
        title = `title: ${el.title} `;

        let author = document.createElement("h3");
        author = `author: ${el.author} `;

        let category = document.createElement("h3");
        category = `category: ${el.category} `
        card.append(title, author, category);
        cont.append(card);
 })


}

