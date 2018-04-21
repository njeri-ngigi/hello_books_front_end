function display(id) {

  if (id == "edit_profile") {
    document.getElementById("signup").style.display = "none";
  }
  if (id == "signup") {
    document.getElementById("login").style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
