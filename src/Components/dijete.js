import { Link } from "react-router-dom";
import austrija from "./slike/aus.png";
import belgija from "./slike/bel.png";
import Bugarska from "./slike/bul.png";
import Ciptar from "./slike/sip.png";
import Ceska from "./slike/cze.png";
import Danska from "./slike/den.png";
import Estonija from "./slike/est.png";
import Finska from "./slike/fin.png";
import Francuska from "./slike/fra.png";
import Grčka from "./slike/gre.png";
import Hrvatska from "./slike/cro.png";
import Irska from "./slike/ire.png";
import Italija from "./slike/ita.png";
import Latvija from "./slike/lat.png";
import Litva from "./slike/lit.png";
import Luksemburg from "./slike/lux.png";
import Malta from "./slike/mal.png";
import Mađarska from "./slike/hun.png";
import Nizozemska from "./slike/hol.png";
import Njemačka from "./slike/ger.png";
import Poljska from "./slike/pol.png";
import Portugal from "./slike/por.png";
import Rumunjska from "./slike/rom.png";
import Slovačka from "./slike/slk.png";
import Slovenija from "./slike/slo.png";
import Španjolska from "./slike/spa.png";
import Švedska from "./slike/swe.png";

export default function Dijete({ salji }) {
  return (
    <div>
      <table id="table">
        <tr>
          <td id="td">
            <Link to="/Povijest">Povijest Europske Unije</Link>
          </td>
          <td id="td">
            <Link to="/">Povratak na Naslovnu stranicu</Link>
          </td>

          <td id="td">
            <Link to="/Galerija">Galerija</Link>
          </td>
        </tr>
      </table>
      <h1>Države Europske Unije</h1>
      <div id="slikica">
        <img id="zastava" src={austrija} />
        <div id="tur">
          <h1>Austrija</h1>
          <p>{salji.aus}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={belgija} />
        <div id="tur">
          <h1>Belgija</h1>
          <p>{salji.bel}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Bugarska} />
        <div id="tur">
          <h1>Bugarska</h1>
          <p>{salji.bul}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Ciptar} />
        <div id="tur">
          <h1>Ciptar</h1>
          <p>{salji.cip}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Ceska} />
        <div id="tur">
          <h1>Češka</h1>
          <p>{salji.cze}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Danska} />
        <div id="tur">
          <h1>Danska</h1>
          <p>{salji.den}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Estonija} />
        <div id="tur">
          <h1>Estonija</h1>
          <p>{salji.est}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Finska} />
        <div id="tur">
          <h1>Finska</h1>
          <p>{salji.fin}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Francuska} />
        <div id="tur">
          <h1>Francuska</h1>
          <p>{salji.fra}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Grčka} />
        <div id="tur">
          <h1>Grčka</h1>
          <p>{salji.gre}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Hrvatska} />
        <div id="tur">
          <h1>Hrvatska</h1>
          <p>{salji.cro}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Irska} />
        <div id="tur">
          <h1>Irska</h1>
          <p>{salji.ire}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Italija} />
        <div id="tur">
          <h1>Italija</h1>
          <p>{salji.ita}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Latvija} />
        <div id="tur">
          <h1>Latvija</h1>
          <p>{salji.lat}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Litva} />
        <div id="tur">
          <h1>Litva</h1>
          <p>{salji.lit}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Luksemburg} />
        <div id="tur">
          <h1>Luksemburg</h1>
          <p>{salji.lux}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Malta} />
        <div id="tur">
          <h1>Malta</h1>
          <p>{salji.mal}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Mađarska} />
        <div id="tur">
          <h1>Mađarska</h1>
          <p>{salji.hun}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Nizozemska} />
        <div id="tur">
          <h1>Nizozemska</h1>
          <p>{salji.hol}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Njemačka} />
        <div id="tur">
          <h1>Njemačka</h1>
          <p>{salji.ger}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Poljska} />
        <div id="tur">
          <h1>Poljska</h1>
          <p>{salji.pol}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Portugal} />
        <div id="tur">
          <h1>Portugal</h1>
          <p>{salji.por}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Rumunjska} />
        <div id="tur">
          <h1>Rumunjska</h1>
          <p>{salji.rom}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Slovačka} />
        <div id="tur">
          <h1>Slovačka</h1>
          <p>{salji.slk}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Slovenija} />
        <div id="tur">
          <h1>Slovenija</h1>
          <p>{salji.slo}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Španjolska} />
        <div id="tur">
          <h1>Španjolska</h1>
          <p>{salji.spa}</p>
        </div>
      </div>

      <div id="slikica">
        <img id="zastava" src={Švedska} />
        <div id="tur">
          <h1>Švedska</h1>
          <p>{salji.swe}</p>
        </div>
      </div>
    </div>
  );
}
