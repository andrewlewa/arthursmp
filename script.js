// mc server fetch player
// code for fetch: <span id="player-count">Loading...</span>
async function fetchPlayerCount() {
  const serverIP = "play.arthursmp.my.id"; // Replace with your Minecraft server IP
  const apiUrl = `https://api.mcsrvstat.us/2/${serverIP}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const playerCount = data.players ? data.players.online : 0;

    document.getElementById(
      "player-count"
    ).textContent = `Current players online: ${playerCount}`;
  } catch (error) {
    console.error("Error fetching player count:", error);
    document.getElementById("player-count").textContent =
      "Error fetching player count";
  }
}

fetchPlayerCount();

// pricing and wa auto chat
function updateDetails() {
  var dropdown = document.getElementById("productDropdown");
  var price = dropdown.options[dropdown.selectedIndex].value;
  var product =
    dropdown.options[dropdown.selectedIndex].getAttribute("data-product");

  document.getElementById("priceDisplay").textContent = price || "Harga";
  document.getElementById("productDisplay").textContent =
    product || "Nominal Top-Up";
}

function contactWhatsApp() {
  var dropdown = document.getElementById("productDropdown");
  var product =
    dropdown.options[dropdown.selectedIndex].getAttribute("data-product");
  var price = document.getElementById("priceDisplay").textContent;
  if (price !== "0.00") {
    var message =
      "Halo saya tertarik ingin membeli " + product + " dengan harga " + price;
    var whatsappNumber = "6282153053191"; // Replace with the actual phone number
    var whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);
    window.open(whatsappURL, "_blank");
  } else {
    alert("Tolong pilih nominal topup");
  }
}
