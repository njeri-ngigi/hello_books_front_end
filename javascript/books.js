function showBooks(id){
    if (id == "novels"){
        document.getElementById("articles").style.display = "none";
        document.getElementById("academia").style.display = "none";
    }
    if (id == "articles") {
      document.getElementById("novels").style.display = "none";
      document.getElementById("academia").style.display = "none";
    }
    if (id == "academia") {
      document.getElementById("novels").style.display = "none";
      document.getElementById("articles").style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}