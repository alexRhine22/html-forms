const passwordInput = document.getElementById("password");
const hiddenInputWrapper = document.getElementById("hidden-input-wrapper");

const showHiddenInput = () => {
  hiddenInputWrapper.style.height = `85px`;
  hiddenInputWrapper.setAttribute("aria-hidden", false);

  setTimeout(() => {
    hiddenInputWrapper.style.overflow = "visible";
  }, 300);
};

passwordInput.addEventListener("click", showHiddenInput);
