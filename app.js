function toggleRadio(el){
  if(el.dataset.checked){
    el.checked = false;
    el.dataset.checked = "";
  }else{
    el.dataset.checked = "true";
  }
}