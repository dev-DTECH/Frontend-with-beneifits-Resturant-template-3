function scrollToTop() {
  window.scrollTo(0, 0);
}
window.addEventListener('scroll', () => {
  let nav = document.getElementsByClassName("nav")[0]
  // console.log(window.scrollY)
  if(window.scrollY>300)
    nav.style.background="black"
  else
    nav.style.background="none"

})