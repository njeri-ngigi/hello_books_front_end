function display_edit() {
    document.getElementById("profile_details").style.display = "none";
    document.getElementById("edit_profile").style.display = "block";
}
function display_profile() {
    document.getElementById("profile_details").style.display = "block";
    document.getElementById("edit_profile").style.display = "none";
}
function change_password(){
    document.getElementById("edit_password").style.display="block";
    document.getElementById("btn_change").style.display = "none";
}

