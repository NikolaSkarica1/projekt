import { Link } from "react-router-dom";
import slika1 from "./slike/his.png";
import GIF from "./slike/brexit.gif";
export default function Povijest() {
  return (
    <div>
      <table id="table">
        <tr>
          <td id="td">
            <Link to="/">Povratak na Naslovnu stranicu</Link>
          </td>
          <td id="td">
            <Link to="/Zemlje">Zemlje Europske Unije</Link>
          </td>
          <td id="td">
            <Link to="/Galerija">Galerija</Link>
          </td>
        </tr>
      </table>
      <h1>Povijest Europske Unije</h1>
      <div id="cont">
        <div id="tekst1">
          <p>
            Europska unija započela je život 1950-ih kao gospodarski projekt
            koji se sastojao od samo šest europskih zemalja (Francuska, Zapadna
            Njemačka, Italija, Belgija, Luksemburg i Nizozemska) unutar kojih se
            trgovina ugljenom i čelikom mogla odvijati bez prepreka.
            Sveobuhvatna svrha Europske zajednice za ugljen i čelik (kako je
            tada bila poznata) bila je integrirati gospodarstva europskih nacija
            sudionica kako bi se sukob smanjio. Kontekst su naravno bila dva
            razorna svjetska rata u prethodnih pedeset godina, a želja je bila
            spriječiti još jedan.
          </p>
          <p>
            Do 1970-ih Ujedinjeno Kraljevstvo, Danska i Irska pridružile su se
            onome što je sada poznato kao Europska ekonomska zajednica, a
            1980-ih je ponovno narasla i obuhvatila Grčku, Španjolsku i
            Portugal.
          </p>
        </div>
        <div id="slika1">
          <img id="slikaa1" src={slika1} />
        </div>
      </div>
      <div id="cont2">
        <div id="tekst2">
          <p>
            Godine 1985. sklopljen je Schengenski sporazum koji je, nakon
            provedbe, okončao granične kontrole kretanja ljudi (i robe).
            Ujedinjeno Kraljevstvo odustalo je od sudjelovanja u Schengenu i kao
            takvi putnici iz EU-a i danas se suočavaju s graničnim kontrolama
            prilikom ulaska u UK.
          </p>
          <p>
            Godine 1993. EEZ/EZ je postala Europska unija potpisivanjem Ugovora
            iz Maastrichta. Ovaj je ugovor uveo koncept državljanstva Europske
            unije, a također je doveo do stvaranja jedinstvene valute (koja je u
            optjecaj 2002.) i označio je veliko proširenje europskog projekta.
          </p>
          <p>
            Godine 2004. Europska unija doživjela je najveće proširenje
            pristupanjem osam novih istočnoeuropskih država, kao i Malte i
            Cipra. U 2007. dodatno je narastao s pristupanjem Rumunjske,
            Bugarske, a zatim i Hrvatske 2013. godine.
          </p>
          <p>
            2016 godine Ujedinjeno Kraljevstvo glasalo je da izađe iz Europske
            unije. Nakon toga počele su nagocijacije o Britanskom izlasku iz
            europske unije, taj proces naziva se Brexit. 1.1.2021 Uk je službeno
            izišla i EU-a{" "}
          </p>
        </div>
        <div id="slika2">
          <img id="slikaa2" src={GIF} />
        </div>
      </div>
    </div>
  );
}
