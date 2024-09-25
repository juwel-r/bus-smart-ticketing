const selectedSeats = [];
const seatLeft = document.getElementById("seatLeft");
const totalSelected = document.getElementById("totalSelected");
const totalCost = document.getElementById("totalCost");
const grandTotal = document.getElementById("grandTotal");
const coupon = "";

document.getElementById("seatSec").addEventListener("click", function (event) {
  const selectedSeatName = event.target.innerText;

  const tagName = event.target.tagName.toLowerCase();
  if (tagName === "button") {
    event.target.style.backgroundColor = "#1DD100";
    event.target.style.color = "white";
    selectedSeats.push(selectedSeatName);
    seatLeft.innerText = parseInt(seatLeft.innerText) - 1;
    totalSelected.innerText = parseInt(totalSelected.innerText) + 1;
    document.getElementById("noSeat").classList.add("hidden");
    document.getElementById("seelectedList").innerHTML += `
    <div class="text-text text-center font-semibold flex justify-between">
    <span class="flex">${selectedSeatName}</span>
    <span>Economy</span>
    <span>550</span>
    </div>`;
    totalCost.innerText = 550 * selectedSeats.length;
    //Ternary logic
    selectedSeats.length >= 4
      ? (document.getElementById("couponBtn").removeAttribute("disabled"),
        document.getElementById("couponInput").removeAttribute("disabled"))
      : "";

    //coupon
    document.getElementById("couponBtn").addEventListener("click", function () {
        console.log(grandTotal.innerText = parseFloat(totalCost.innerText) * 0.15, typeof grandTotal)
        if (document.getElementById("couponInput").value === "NEW15") {
      }
    });

    // grandTotal.innerText = parseInt(grandTotal.innerText) * 1
  }
});
