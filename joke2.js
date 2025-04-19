const joke_button = document.getElementById("button_joke")
const joke = document.getElementById("joke")
const generate_joke = async() => {
    const config = {
        headers: {Accept: "application/json"}
    };
    const get_joke = await fetch("https://icanhazdadjoke.com/", config);
    const get_data = await get_joke.json();
    joke.innerHTML = get_data.joke;
};

generate_joke();
joke_button.addEventListener("click",() => generate_joke());