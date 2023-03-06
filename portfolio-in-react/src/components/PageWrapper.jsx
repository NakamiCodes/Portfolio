import NavHeader from "./NavHeader";
import Overview from "./Overview";
import "../css/PageWrapper.css";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import SocialLinks from "./SocialLinks";
import LinkColumn from "./LinkColumn";
// const mapStateToProps = (state) => ({
//   state,
// });

const PageWrapper = (props) => {
  return (
    <body>
      <div className="page-wrapper">
        <NavHeader></NavHeader>
        <Overview></Overview>
        <Projects></Projects>
        <AboutMe></AboutMe>
        <SocialLinks></SocialLinks>
        <LinkColumn></LinkColumn>
      </div>
    </body>
  );
};

export default PageWrapper;
