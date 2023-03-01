window.onload = () => {
    
    let all = document.getElementsByClassName("zoomD"),
        lightbox = document.getElementById("lightbox");
   
    
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
      };
    }}
   
    
    lightbox.onclick = () => lightbox.className = "";
  };


  function playMusic(){
    var music = new Audio('uiclick.mp3');
    music.play();
    }