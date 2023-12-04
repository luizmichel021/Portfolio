
import instalogo from "../assets/img/instagram.svg";
import linkedinlogo from "../assets/img/linkedin.svg";
import facelogo from "../assets/img/facebook.svg";
import githublogo from "../assets/img/github.svg";
import avatarlogo from "../assets/img/avatar.svg";
import {
  DivSocial,
  H1inicio,
  SectionInicio,
  H2inicio,
  Divavatar,
  Divola,
} from "./style";

export default function Inicio() {
  return (
    <SectionInicio>
      <Divola>
        <H1inicio>Olá, eu sou Michel ! </H1inicio>
       )<H2inicio>Desenvolvedor front-end</H2inicio>
        <DivSocial>
          <a
            href="https://www.instagram.com/luizmichel021/?hl=pt-br"
            target="_blank"
          >
            <img src={instalogo} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/luizmichel021/" target="_blank">
            <img src={linkedinlogo} alt="" />
          </a>
          <a href="https://www.facebook.com/Luiz.Michel20" target="_blank">
            <img src={facelogo} alt="" />
          </a>
          <a href="https://github.com/luizmichel021" target="_blank">
            <img src={githublogo} alt="" />
          </a>
        </DivSocial>
      </Divola>

      <Divavatar>
        <img src={avatarlogo} alt="" />
      </Divavatar>
    </SectionInicio>
  );
}
