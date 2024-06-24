import { Link } from "react-router-dom";

/* component import */
import ButtonMailto from "../components/BtnMailto";

const url = "https://github.com/limyoursun";
const Footer = () => {
  return (
    <footer>
      <div>
        <button className="github" onClick={() => { window.open(url) }}>GITHUB </button>
        <ButtonMailto label="임선 이메일 주소" mailto="mailto:limyoursun@naver.com" />
      </div>
      <table>
        <caption>page info</caption>
        <tbody>
          <tr>
            <td rowSpan={2}>
              <span>S</span>
            </td>
            <td>PUBLISHING PORTFOLIO</td>
          </tr>
          <tr>
            <td>
              <small>&copy;</small> 2024. LIMSUN. All rights reserved.
            </td>
          </tr>
        </tbody>
      </table>
      
    </footer>
  );
};
export default Footer;
