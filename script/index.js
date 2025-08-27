// bookmarked functionalities here
function toBookmark(id) {
  document.getElementById(id).addEventListener("click", function () {
    if (
      document.getElementById(id).classList.contains("fa-regular", "fa-heart")
    ) {
      document.getElementById(id).classList.remove("fa-regular", "fa-heart");
      document
        .getElementById(id)
        .classList.add("fa-solid", "fa-heart", "text-red-500");

      const bookMarkCount = parseInt(
        document.getElementById("bookMarkCount").innerText
      );

      document.getElementById("bookMarkCount").innerText = 1 + bookMarkCount;
    } else {
      document
        .getElementById(id)
        .classList.remove("fa-solid", "fa-heart", "text-red-500");
      document.getElementById(id).classList.add("fa-regular", "fa-heart");
      const bookMarkCount = parseInt(
        document.getElementById("bookMarkCount").innerText
      );

      document.getElementById("bookMarkCount").innerText = bookMarkCount - 1;
    }
  });
}

toBookmark("nationalHrtBtn");
toBookmark("policeHrtBtn");
toBookmark("fireHrtBtn");
toBookmark("ambulanceHrtBtn");
toBookmark("womenHrtBtn");
toBookmark("crptionHrtBtn");
toBookmark("electricityHrtBtn");
toBookmark("bracHrtBtn");
toBookmark("brhHrtBtn");

// call buttons functionalities

let callingData = [];
const callBtn = document.getElementsByClassName("call-btn");

for (const element of callBtn) {
  element.addEventListener("click", function () {
    const serviceTitle =
      element.parentNode.parentNode.querySelector("#serviceTitle").innerText;
    const serviceNumber =
      element.parentNode.parentNode.querySelector("#serviceNumber").innerText;

    let starCoin = parseInt(document.getElementById("star-coin").innerText);
    if (starCoin < 20) {
      alert("Not Enough Coin");
      return;
    } else {
      document.getElementById("star-coin").innerText = starCoin - 20;
    }
    alert(
      "Calling Emergency Services \n\n" + serviceTitle + "\n" + serviceNumber
    );

    const data = {
      serviceTitle: serviceTitle,
      serviceNumber: serviceNumber,
      date: new Date().toLocaleTimeString(),
    };
    callingData.push(data);

    const transactionContainer = document.getElementById(
      "transactionContainer"
    );
    transactionContainer.innerText = "";

    for (const data of callingData) {
      const div = document.createElement("div");
      div.innerHTML = `
                  <div class="p-4 flex justify-between items-center bg-[#FAFAFA] rounded-lg gap-3">
                <div>
                    <h1 class="text-[18px] text-[#111] font-semibold">${data.serviceTitle}</h1>
                    <p class="text-[18px] text-[#5C5C5C] font-semibold">${data.serviceNumber}</p>
                </div>
                <p class="text-[18px] text-[#111] font-semibold">${data.date}</p>
            </div>
      `;
      transactionContainer.appendChild(div);
    }
  });
}

// clear button
document.getElementById("clear-btn").addEventListener("click", function () {
  callingData = [];
  transactionContainer.innerText = "";
});
