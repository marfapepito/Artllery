function openPage(pageName,elmnt,color){
    var i, tabcontent, tablinks, tabhome;
    tabhome = document.getElementsByClassName("tabhome");
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++){
      tabcontent[i].style.display = "none";
    }

      for (i = 0; i < tabhome.length; i++){
          tabhome[i].style.display = "none";
      }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++){
      tablinks[i].style.backgroundColor = "";
  }
    if(pageName.toLowerCase() === "artists" || pageName.toLowerCase() === "artworks"){
        document.getElementById(pageName).style.display = "flex";
    }else{
        document.getElementById(pageName).style.display = "block";
    }

    if(pageName != "home"){
        elmnt.style.backgroundColor = color;
    }

    window.scrollTo(0, 0);

  }

  function onclickAlert(){
      openPage("home", this, "none", );
  }