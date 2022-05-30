import { Link } from "react-router-dom";
import Zemlje from "./Zemlje";
import naslovna_slika from "./slike/11.png";
export default function Naslovna() {
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
            <Link to="/Galerija">Galerija</Link>
          </td>
        </tr>
      </table>
      <img src={naslovna_slika} id="nslovna" />
      <h1 id="naslov">Naslovna</h1>
      <div id="tekst">
        <h1>O Europskoj uniji</h1>
        <p>
          Europska unija (kratica EU), ekonomska je i politička unija,
          jedinstvena međuvladina i nadnacionalna zajednica europskih država,
          nastala kao rezultat procesa suradnje i integracije koji je započeo
          1951. godine između šest država (Belgije, Francuske, Njemačke,
          Italije, Luksemburga i Nizozemske). Europska unija formalno je
          uspostavljena 1. studenoga 1993. godine stupanjem na snagu Ugovora o
          Europskoj uniji (poznatiji kao Ugovor iz Maastrichta). Europska unija
          je jedina organizacija ove vrste na svijetu, i zbog toga ju je ponekad
          teško definirati. To je organizacija koja stalno mijenja i nadograđuje
          politike u kojima djeluje. Trenutno se može definirati kao federacija
          u monetarnim odnosima, poljoprivredi, trgovini i zaštiti okoliša;
          konfederacija u društvenoj i gospodarskoj politici, zaštiti potrošača,
          unutarnjoj politici; i kao međunarodna organizacija u vanjskoj
          politici.
        </p>
        <h1>Vrijednosti Europske Unije</h1>
        <div id="slikica">
          <div id="tur">
            <h1>Sloboda</h1>
            <p>
              Sloboda kretanja pruža građanima pravo na slobodno kretanje i
              boravak unutar Unije. Individualne slobode kao što su poštovanje
              privatnog života te slobode mišljenja, vjeroispovijesti,
              okupljanja, izražavanja i informiranja zaštićene su Poveljom EU-a
              o temeljnim pravima.
            </p>
          </div>
        </div>
        <div id="slikica">
          <div id="tur">
            <h1>Demokracija</h1>
            <p>
              Funkcioniranje EU-a temelji se na predstavničkoj demokraciji. Biti
              europski građanin podrazumijeva i uživanje političkih prava. Svaki
              odrasli građanin EU-a ima pravo kandidirati se i glasati na
              izborima za Europski parlament. Građani EU-a imaju pravo
              kandidirati se i glasati u svojoj zemlji boravišta ili u matičnoj
              zemlji.
            </p>
          </div>
        </div>
        <div id="slikica">
          <div id="tur">
            <h1>Jednakost</h1>
            <p>
              Jednakost se odnosi na jednaka prava svih građana pred zakonom.
              Načelo ravnopravnosti žena i muškaraca temelj je svih europskih
              politika i europske integracije. Ono se primjenjuje u svim
              područjima. Načelo jednake plaće za jednaki rad postalo je dijelom
              Ugovora iz Rima 1957.
            </p>
          </div>
        </div>
        <div id="slikica">
          <div id="tur">
            <h1>Vladavina prava</h1>
            <p>
              EU se temelji na vladavini prava. Sve što EU čini temelji se na
              ugovorima o kojima su dobrovoljno i demokratski odlučile sve
              države članice. Pravo i pravda temelje se na neovisnom pravosuđu.
              Države članice dale su konačnu nadležnost Sudu Europske unije,
              čije presude moraju poštovati svi.
            </p>
          </div>
        </div>
        <div id="slikica">
          <div id="tur">
            <h1>Ljudska prava</h1>
            <p>
              Ljudska prava zaštićena su Poveljom EU-a o temeljnim pravima. Ona
              uključuju pravo na slobodu od diskriminacije na temelju spola,
              rasnog ili etničkog podrijetla, vjere ili uvjerenja, invaliditeta,
              dobi ili spolne orijentacije, pravo na zaštitu osobnih podataka i
              pravo na pristup pravosuđu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
