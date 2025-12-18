let focusMode = false;

function toggleFocus() {
  let focus_element = document.getElementById("focus");
  focusMode = !focusMode;
  if (focusMode) {
    focus_element.classList.add("focus");
  }
  else {
    focus_element.classList.remove("focus");
  }
}