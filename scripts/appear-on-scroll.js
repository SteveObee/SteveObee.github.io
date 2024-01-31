//Get the button:
const mybutton = document.getElementById('topBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.display = 'block';
    mybutton.style.opacity = '0.7';
  } else {
    mybutton.style.display = 'none';
  }
};
