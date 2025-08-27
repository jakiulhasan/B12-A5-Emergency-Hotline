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
