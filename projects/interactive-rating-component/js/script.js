var btnSubmit = document.getElementById("submit");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var ratings = document.querySelectorAll("[name='rating']");
var value;
var txtResult = document.getElementById("result");

btnSubmit.addEventListener("click", changeCard);
document.addEventListener("keydown", (e) => {
  if ((e.key = "Enter")) {
    changeCard();
  }
});

function changeCard() {
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i].checked) {
      var value = i + 1;
    }
  }
  if (value) {
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
    txtResult.innerHTML = `You selected ${value} out of 5`;
  }
}
