const keys = document.querySelectorAll("#keyboard>div");
let store = "";
let query = document.querySelector("#display");

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", (event) => {
    let currentkey = event.target.innerText;

    if (currentkey == "C") {
      store = " ";
      query.innerText = "";
    } else if (currentkey == "=") {
      query.innerText = eval(store);
    } else {
      store += currentkey;
      query.innerText = store;
    }
  });
}
