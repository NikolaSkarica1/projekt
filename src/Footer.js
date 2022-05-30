import insta from "./Components/ins.png";
import face from "./Components/face.png";
import tweet from "./Components/tweet.png";
export default function Footer() {
  return (
    <div id="footer">
      <a href="https://www.instagram.com/eucouncil/?hl=en">
        <img src={insta} id="logo1"></img>
      </a>
      <a href="https://www.facebook.com/EuropeanCommission">
        <img src={face} id="logo1"></img>
      </a>
      <a href="https://twitter.com/eucouncil">
        <img src={tweet} id="logo1"></img>
      </a>
      <p id="p">Kontaktirajte nas: eu@gmail.com</p>
      <p id="p">Broj telefona:+385 99 747 4602</p>
      <p id="copyright">Copyright:NŠ2022</p>
    </div>
  );
}
