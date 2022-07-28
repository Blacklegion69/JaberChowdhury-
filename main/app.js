
let loader = document.getElementById("loaderr");
window.addEventListener("load",function(){
  setTimeout(function() {
    loader.style.top = "-100vh";
  }, 3000);
});




let word = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
let hexcolor = (y) => {
  for (let x = 0; x < word.length/2 - 2; x++) {
    let n = Math.floor(Math.random()*word.length);
    let hexcode = word[n];
    y=y+hexcode;
  }
  return y;
};
function cursor (e){
    let color = ("#"+hexcolor("")+"ff");
    let body = document.querySelectorAll ("body")[0];
    const spann = document.createElement ("spann");
    spann.classList.add("xyzxcover");
    body.appendChild(spann);
    let p = document.createElement ("p");
    p.classList.add("xyzx");
    body.appendChild(p);
    let x = e.pageX;
    let y = e.pageY;
    p.style.left = x+"px";
    p.style.top = y+"px";
    spann.style.left = x+"px";
    spann.style.top = y+"px";
    spann.style.border = "2px double " + color;
    p.style.backgroundColor = color;
    setTimeout(function() {
      p.remove();
    }, 1950);
    setTimeout(function() {
      spann.remove();
    }, 1000);
}
['click','mousemove','mouseleave'].forEach( function(evt) {
    document.addEventListener(evt,cursor, false);
});