import { Link } from "react-router-dom";

/* css import */
import style from "../styles/Footer.module.scss";

const url = "https://github.com/limyoursun"
const Footer = () => {
  return (
    <footer>
      <table>
        <caption>page info</caption>
        <tbody>
          <tr>
            <td rowSpan={2}><span>S</span></td>
            <td>PUBLISHING PORTFOLIO</td>
          </tr>
          <tr>
            <td><small>&copy;</small> 2024. LIMSUN. All rights reserved.</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => {window.open(url)}}>GITHUB</button>
    </footer>
  );
};
export default Footer;
