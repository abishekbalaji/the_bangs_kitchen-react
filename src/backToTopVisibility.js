const backToTopVisibility = () => {
  window.onscroll = () => {
    makeVisible();
  };
};

const makeVisible = () => {
  let btn = document.getElementById("backToTop");
  let logo = document.getElementsByClassName("brand-logo-web")[0];
  let logo_mob = document.getElementsByClassName("brand-logo")[0];
  let ham_icon = document.getElementsByClassName("hamburger-icon")[0];
  // let nav_desk = document.getElementsByClassName("navbar")[0];
  // let nav_mob = document.getElementsByClassName("brand")[0];
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
    logo.classList.add("margin-y_remove");
    logo_mob.classList.add("margin-y_remove");
    ham_icon.classList.add("margin-y_remove");
    // nav_desk.classList.add("transparency");
    // nav_mob.classList.add("transparency");
  } else {
    btn.style.display = "none";
    logo.classList.remove("margin-y_remove");
    logo_mob.classList.remove("margin-y_remove");
    ham_icon.classList.remove("margin-y_remove");
    // nav_desk.classList.remove("transparency");
    // nav_mob.classList.remove("transparency");
  }
};

export default backToTopVisibility;
