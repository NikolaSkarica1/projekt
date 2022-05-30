import { Link } from "react-router-dom";
import prva from "./slike/1.png";
import prvaa from "./slike/2.png";
import prvaaa from "./slike/3.png";
import prvaaaa from "./slike/4.png";
import prvaaaaa from "./slike/5.png";
import prvaaaaaa from "./slike/6.png";
import prvaaaaaaa from "./slike/7.png";
import prvaaaaaaaa from "./slike/8.png";
import prvaaaaaaaaa from "./slike/9.png";
import prvaaaaaaaaaa from "./slike/10.png";
import prvaaaaaaaaaaa from "./slike/11.png";
import prvaaaaaaaaaaaa from "./slike/12.png";
import prvaaaaaaaaaaaaa from "./slike/13.png";
import prvaaaaaaaaaaaaaa from "./slike/14.png";
import prvaaaaaaaaaaaaaaa from "./slike/15.png";
import prvaaaaaaaaaaaaaaaa from "./slike/16.png";
import prvaaaaaaaaaaaaaaaaa from "./slike/17.png";
import prvaaaaaaaaaaaaaaaaaa from "./slike/18.png";

export default function Galerija() {
  return (
    <div>
      <table id="table">
        <tr>
          <td id="td">
            <Link to="/Povijest">Povijest Europske Unije</Link>
          </td>
          <td id="td">
            <Link to="/Zemlje">Zemlje Europske Unije</Link>
          </td>
          <td id="td">
            <Link to="/">Povratak na Naslovnu stranicu</Link>
          </td>
        </tr>
      </table>
      <table id="slike">
        <tr id="slikee">
          <td>
            <img src={prvaaaaaa} />
          </td>
          <td id="double" rowspan="2">
            <img src={prvaaaaaaaaaaaaaaaaa} />
          </td>
          <td>
            <img src={prvaaaaaaaaaaaa} />
          </td>
          <td id="double" rowspan="2">
            <img src={prvaa} />
          </td>
          <td>
            <img src={prvaaaa} />
          </td>
        </tr>
        <tr>
          <td>
            <img src={prvaaaaaaaaa} />
          </td>
          <td>
            <img src={prvaaa} />
          </td>
          <td>
            <img src={prvaaaaaaaaaaaaa} />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <img src={prva} />
          </td>
          <td colspan="3">
            <img src={prvaaaaaaaaaaa} />
          </td>
        </tr>
        <tr>
          <td>
            <img src={prvaaaaaaaa} />
          </td>
          <td id="double" rowspan="2">
            <img src={prvaaaaaaaaaaaaaa} />
          </td>
          <td>
            <img src={prvaaaaa} />
          </td>
          <td id="double" rowspan="2">
            <img src={prvaaaaaaaaaaaaaaaaaa} />
          </td>
          <td>
            <img src={prvaaaaaaa} />
          </td>
        </tr>
        <tr>
          <td>
            <img src={prvaaaaaaaaaaaaaaa} />
          </td>
          <td>
            <img src={prvaaaaaaaaaa} />
          </td>
          <td>
            <img src={prvaaaaaaaaaaaaaaaa} />
          </td>
        </tr>
      </table>
    </div>
  );
}
