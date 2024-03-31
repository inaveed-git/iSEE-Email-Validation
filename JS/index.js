

const container = document.querySelector(".container");
const loader = document.querySelector(".loader");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const emailInput = document.querySelector("#emailInput").value;
    loader.style.display = "block"; // Show loader
    await apiEmail(emailInput);
    loader.style.display = "none"; // Hide loader
});

async function apiEmail(email) {
    const YOUR_APIKEY = `your_api_key_here`;
    const api = `https://api.emailvalidation.io/v1/info?apikey=${YOUR_APIKEY}&email=${email}`;

    try {
        const url = await fetch(api);
        const res = await url.json();

        container.innerHTML = "";

        for (const key of Object.keys(res)) {
            const infoElement = document.createElement("div");
            infoElement.classList.add("contant");
            infoElement.innerHTML = `${key}: ${res[key]}`;
            container.appendChild(infoElement);
        }
    } catch (error) {
        console.error("An error occurred while fetching email information:", error);
    }
}
