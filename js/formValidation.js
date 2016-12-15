function validateLoginForm() {
    if (document.getElementById('username').value === "") {
      alert("The username field is empty.")
      return false;
    }
    else if (document.getElementById('password').value === "") {
      alert("The password field is empty.")
      return false;
    }

    return true;
}
