const form = document.querySelector("#form");
const ratingStart = document.querySelector("#rating-start");
const ratingEnd = document.querySelector("#rating-end");
const rates = document.querySelectorAll(".button");

/**
 * When I click on the submit button of the form, I delete the hidden class from the rating-end section and
 * I take out the rating-start section from the flow with the display property set to none.
 */

form.addEventListener("submit", function (e) {
  e.preventDefault();
  ratingEnd.classList.remove("hidden");
  ratingStart.style.display = "none";
});
