import "../css/Nav-Header.css";
import LogoButton from "./LogoButton";

const NavHeader = (props) => {
  const navHeader = document.querySelector(".NavHeader");
  let prevScrollPos = window.pageYOffset;

  window.addEventListener("scroll", () => {
    const currentScrollYPos = window.pageYOffset;
    console.log(currentScrollYPos);

    if (prevScrollPos > currentScrollYPos || currentScrollYPos === 0) {
      //user is scolling up
      navHeader.classList.add("show");
    } else {
      //user is scrolling down
      navHeader.classList.remove("show");
    }

    prevScrollPos = currentScrollYPos;
  });
  return (
    <div className="NavHeader">
      <LogoButton></LogoButton>
    </div>
  );
};

export default NavHeader;
