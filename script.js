(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let mainForm = document.getElementById("main-form");
function calculateTax() {
  const grossIncome = parseFloat(document.getElementById("gross").value);
  const extraIncome = parseFloat(document.getElementById("income").value);
  const deductions = parseFloat(document.getElementById("deductions").value);
  const age = document.getElementById("age").value;

  const grossFeedback = document.getElementById("gross-feedback");
  const incomeFeedback = document.getElementById("income-feedback");
  const deductionsFeedback = document.getElementById("deductions-feedback");

  if (mainForm.gross.value === null || mainForm.gross.value === "") {
    grossFeedback.innerText = "Please enter your gross annual income";
  }

  if (mainForm.income.value === null || mainForm.income.value === "") {
    incomeFeedback.innerText = "Please enter your extra income";
  }
  if (mainForm.deductions.value === null || mainForm.deductions.value === "") {
    deductionsFeedback.innerText =
      "Please enter your total applicable deductions";
    return;
  } else {
    const taxableIncome = grossIncome + extraIncome - deductions;
    let taxAmount = 0;
    if (taxableIncome > 800000) {
      if (age === "<40") {
        taxAmount = 0.3 * (taxableIncome - 800000);
      } else if (age === "≥40 & <60") {
        taxAmount = 0.4 * (taxableIncome - 800000);
      } else if (age === "≥60") {
        taxAmount = 0.1 * (taxableIncome - 800000);
      }
    }

    // Display result in modal
    document.getElementById(
      "no"
    ).innerText = `Your tax liability is: ${taxAmount.toFixed(2)} Lakhs`;

    mainForm.classList.add("container-hidden");
    popup.classList.add("popup-visible");
  }
}

const main_form = document.getElementById("main-form");

main_form.onsubmit = function (event) {
  event.preventDefault();
  calculateTax();
};

popup.onsubmit = function (e) {
  mainForm.classList.remove("container-hidden");
  popup.classList.remove("popup-visible");
};
