const selectedSeat = [];
let totalCost = document.getElementById("totalCost");
let grandTotal = document.getElementById("grandTotal");

document.getElementById("seatSec").addEventListener("click", function (event) {
  const tag = event.target.tagName;
  const seatName = event.target.innerText;

  if (tag === "BUTTON") {
    if (selectedSeat.length < 4) {
      if (!selectedSeat.includes(seatName)) {
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";
        selectedSeat.push(seatName);

        document.getElementById("noSeat").classList.add("hidden");
        document.getElementById("seelectedList").innerHTML += `
                <div class="text-text text-center font-semibold flex justify-between">
                <span class="flex">${seatName}</span>
                <span>Economy</span>
                <span>550</span>
                </div>`;

        document.getElementById("seatLeft").innerText =
          40 - selectedSeat.length;
        document.getElementById("totalSelected").innerText =
          selectedSeat.length;
        totalCost.innerText = selectedSeat.length * 550;
        grandTotal.innerText = totalCost.innerText;

        //Coupon
        if (selectedSeat.length == 4) {
          document.getElementById("couponInput").removeAttribute("disabled");
          document.getElementById("couponBtn").removeAttribute("disabled");
          document
            .getElementById("couponBtn")
            .addEventListener("click", function () {
              if (document.getElementById("couponInput").value === "NEW15") {
                grandTotal.innerText =
                  totalCost.innerText - totalCost.innerText * 0.15;
                totalDiscount = totalCost.innerText - grandTotal.innerText;
                document.getElementById("totalDiscount").innerText =
                  totalDiscount;
                document
                  .getElementById("discountSec")
                  .classList.remove("hidden");
                document.getElementById("couponSec").classList.add("hidden");
              } else if (
                document.getElementById("couponInput").value === "COUPLE20"
              ) {
                grandTotal.innerText =
                  totalCost.innerText - totalCost.innerText * 0.2;
                totalDiscount = totalCost.innerText - grandTotal.innerText;
                document.getElementById("totalDiscount").innerText =
                  totalDiscount;
                document
                  .getElementById("discountSec")
                  .classList.remove("hidden");
                document.getElementById("couponSec").classList.add("hidden");
              }
            });
        }
        document.getElementById("nextBtn").removeAttribute("disabled");
        
      } else {
        alert("Seat Already Selected");
      }
    } else {
      alert("Maximum number limit!");
    }
    
  }

});


document
.getElementById("nextBtn")
.addEventListener("click", function () {
  if(inputValue('PName') !== '' && inputValue('PNumber') !== '' && !isNaN(inputValue('PNumber')) && inputValue('PNumber').length == 11){
    document.getElementById('userName').innerText = inputValue('PName')
    document.getElementById('seatCount').innerText = innerTextValue('totalSelected')
    my_modal_1.showModal()
  }else{
    alert('Please Provide Valid Information!')
  }
});