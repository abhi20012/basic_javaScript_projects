let count = 0;

let passanger = document.querySelector("#passanger");




function increment() {

    count += 1;
    passanger.innerText = count;

}


let saved = document.querySelector("#saved");

function save() {
    let inc = count + "- "
    saved.innerText += inc;
    passanger.innerText = 0;
    count = 0;
}