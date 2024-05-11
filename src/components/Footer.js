/* css import */
import style from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Test</p>
        <table>
          <caption>page info</caption>
          <thead>
            <tr>
              <th>PERIOD</th>
              <th>type of work</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>202103 202310</td>
              <td>PUBLISHING</td>
            </tr>
            <tr>
              <td colSpan={2}>&copy; 2024. LIMSUN. All rights reserved.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Test</p>
    </footer>
  );
};
export default Footer;
