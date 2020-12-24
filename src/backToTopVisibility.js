const backToTopVisibility = () => {
  window.onscroll = () => {
    makeVisible();
  };
};

const makeVisible = () => {
  let btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

export default backToTopVisibility;
