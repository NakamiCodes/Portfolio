import LinkItem from "./LinkItem";
import "../css/Link-Column.css";

const LinkColumn = () => {
  const linksNames = ["Instagram", "LinkdIn", "GitHub", "Twitter"];
  const links = linksNames.map((link, index) => {
    return (
      <li key={index} id="link-item">
        <LinkItem key={index} props={link}></LinkItem>
      </li>
    );
  });
  return <ul className="link-column">{links}</ul>;
};

export default LinkColumn;
