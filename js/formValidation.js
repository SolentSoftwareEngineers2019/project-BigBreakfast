function validateLoginForm() {
    if (document.getElementById('username').value === "") {
      alert("The Username is required.")
      return false;
    }
    else if (document.getElementById('password').value === "") {
      alert("The Password is required.")
      return false;
    }

    return true;
}

function validateRegisterForm() {
  var firstName = document.getElementById('firstName').value,
      lastName = document.getElementById('lastName').value,
      email = document.getElementById('email').value;

  if(!validateLoginForm()) {
    return false;
  }

  if (firstName === "") {
    alert("The First name is required.")
    return false;
  }
  else if (firstName.indexOf(' ') != -1) {
    alert("The First name can only contain one word.")
    return false;
  }

  if (lastName === "") {
    alert("The Last name is required.")
    return false;
  }
  else if (lastName.indexOf(' ') != -1) {
    alert("The Last name can only contain one word.")
    return false;
  }

  if (email === "") {
    alert("The Email is required.")
    return false;
  }
  else if (email.indexOf("@") != -1 && email.lastIndexOf(".") < email.indexOf("@")) {
    alert("Wrong format of email.")
    return false;
  }
}

function validatePostForm() {
  var word1 = document.getElementById("word1").value,
      word2 = document.getElementById("word2").value,
      word3 = document.getElementById("word3").value;

      if (word1 === "") {
        alert("The first word is required.")
        return false;
      }

      if (!checkWord(word1) || !checkWord(word2) || !checkWord(word3)) {
        return false;
      }
}

function checkWord(word) {
  if (word.indexOf(' ') != -1) {
    alert("The fields can only contain one word.")
    return false;
  }

  return true;
}
