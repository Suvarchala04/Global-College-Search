let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let input = document.querySelector("input");
  let country = input.value;
  let colleges = await getCollegeData(country);
  show(colleges);
  input.value = "";
});

function show(colleges) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colleges) {
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function getCollegeData(country) {
  try {
    let colleges = await axios.get(url + country);
    return colleges.data;
  } catch (err) {
    console.log("Error:", err);
    return [];
  }
}
