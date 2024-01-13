const myDiv = document.querySelector('.navbar1');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.clientHeight;

  if (scrollY <= 40) {
    myDiv.classList.remove('at-bottom');
    myDiv.classList.add('at-top');
  } else {
    myDiv.classList.remove('at-top');
    myDiv.classList.add('at-bottom');
  }

});

function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId); 

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }