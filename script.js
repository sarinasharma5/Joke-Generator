let buttonelement = document.getElementById("btn");
let jokeelement = document.getElementById("joke");

buttonelement.addEventListener("click", () => {
  generatejoke();
});

async function generatejoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      "Accept": "application/json"
    }
  });

  let joke = await response.json();

  console.log(joke);
  let jokeParagraph = document.createElement("p");
  jokeParagraph.textContent = joke.joke;
  jokeParagraph.style.color = "black";
  jokeParagraph.style.fontSize = "30px";
  jokeelement.innerHTML= '';
  jokeelement.appendChild(jokeParagraph);
  console.log(jokeelement);
}