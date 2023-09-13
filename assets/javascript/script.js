const form = document.getElementById("form");
const ratingStart = document.getElementById("rating-start");
const ratingEnd = document.getElementById("rating-end");
const buttonsValue = document.querySelectorAll(".buttons");
const rating = document.getElementById("rating");

/**
 * When I click on the submit button of the form, I delete the hidden class from the rating-end section and
 * I take out the rating-start section from the flow with the display property set to none.
 */

form.addEventListener("submit", function (e) {
  e.preventDefault();
  ratingEnd.classList.remove("hidden");
  ratingStart.style.display = "none";
});

/**
 * I use the forEach() method so I can retrieve the information. I process this information on click and I display
 * it in the span element which has the id rating.
 */

buttonsValue.forEach((index) => {
  index.addEventListener("click", function () {
    rating.innerHTML = index.value;
  });
});
