import styledlogo from "../assets/img/styled.svg";
import css3logo from "../assets/img/css3.svg"
import reactlogo from "../assets/img/react.svg"
import jslogo from "../assets/img/js.svg"
import gitlogo from "../assets/img/git.svg"

import { Figuresobre, H2sobre, Psobre, Sectionsobre } from "./style";

export default function Sobre() {
  return (
    <Sectionsobre>
      <H2sobre>SOBRE-MIM</H2sobre>
      <Psobre>
        Olá! Meu nome é Michel, tenho 23 anos e sou do Complexo do Alemão.
        Atualmente, trabalho como motoboy, mas minha verdadeira paixão está na
        tecnologia. Estou cursando Engenharia de Software na Unopar Anhaguera e
        também estou fazendo um curso de Front End pela Escola Vai Na Web.
        <br /> <br />
        Acredito firmemente que a tecnologia tem o poder de mudar o mundo e
        quero fazer parte dessa mudança. Para mim, a tecnologia não é apenas uma
        ferramenta, mas uma forma de vida. Ela tem o potencial de transformar
        não apenas o mundo ao nosso redor, mas também o nosso próprio mundo.
        <br /> <br />
        Estou constantemente buscando novas oportunidades para aprender e
        crescer na área de tecnologia. Meu objetivo é usar meu conhecimento e
        habilidades para criar soluções inovadoras que possam beneficiar a
        sociedade.
        <br /> <br />
        Embora eu esteja apenas no início da minha jornada, estou comprometido
        em trabalhar duro e me esforçar para alcançar meus objetivos. Sei que o
        caminho não será fácil, mas estou pronto para enfrentar qualquer desafio
        que venha pela frente.
        <br /> <br />
        Obrigado por visitar meu portfólio. Espero que você goste do que vê e
        estou ansioso para colaborar e criar um futuro melhor através da
        tecnologia.
      </Psobre>
      <H2sobre>Skills</H2sobre>
      <Figuresobre>
        <img src={styledlogo} alt="" />
        <img src={css3logo} alt="" />
        <img src={reactlogo} alt="" />
        <img src={jslogo} alt="" />
        <img src={gitlogo} alt="" />
      </Figuresobre>
    </Sectionsobre>
  );
}
