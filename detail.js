document.addEventListener("DOMContentLoaded", () => {
  const decrementButton = document.querySelector(".minus-logo");
  const incrementButton = document.querySelector(".plus-logo");
  const quantityField = document.getElementById("quantity");

  // Update the states of the decrement and increment buttons
  const updateButtonStates = () => {
    const quantity = parseInt(quantityField.value, 10);
    const isMinimum = quantity <= 1;

    decrementButton.style.opacity = isMinimum ? "0.5" : "1";
    decrementButton.style.pointerEvents = isMinimum ? "none" : "auto";
  };

  // Decrease quantity and update button states
  const handleDecrementClick = () => {
    const quantity = parseInt(quantityField.value, 10);
    if (quantity > 1) {
      quantityField.value = quantity - 1;
      updateButtonStates();
    }
  };

  // Increase quantity and update button states
  const handleIncrementClick = () => {
    quantityField.value = parseInt(quantityField.value, 10) + 1;
    updateButtonStates();
  };

  // Attach event listeners
  decrementButton.addEventListener("click", handleDecrementClick);
  incrementButton.addEventListener("click", handleIncrementClick);

  // Initialize the button states on load
  updateButtonStates();
});
