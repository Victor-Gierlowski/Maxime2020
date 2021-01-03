els = document.getElementsByTagName("li");
for(i=0;i<els.length;i++){
  els[i].addEventListener('click',function(e){select(e)});
}
function select(e){
  if(!e.toElement.classList.contains('choosed')){
    tab = document.getElementsByClassName('choosed');
    for(i=0;i<tab.length;i++){
      tab[i].classList.remove('choosed');
    }
    e.toElement.classList.add('choosed');
  }
}
