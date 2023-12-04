import styled, {keyframes, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";


export const Globalstyle = createGlobalStyle`
*{  
    font-family: "Rajdhani", sans-serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
`;

export const HeaderConteiner = styled.header`
  background-color: #404040;
  height: 80px;
`;

export const Ulheader = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 55px;
  width: 423px;
  height: 80px;
`;
export const Liheader = styled.li`
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f9f4fb;
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px #000;
`;

export const SectionInicio = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 91.7vh;
  background-color: #262626;
`;

export const Divola = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #262626;
`;

export const DivSocial = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 900px;
  height: 150px;
  align-items: center;
`;

export const H1inicio = styled.h1`
  color: #f9f4fb;
  text-shadow: 5px 5px #000;
  font-size: 70px;
`;

export const H2inicio = styled.h2`
  color: #f9f4fb;
  font-size: 70px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 15px;
  text-shadow: 1px 1px #000;
`;

export const Divavatar = styled.div`
  width: 261px;
  height: 372px;
  border-radius: 900px;
  background-color: #958f8f;
`;

//

export const Sectionsobre = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 91.7vh;
  background-color: #262626;
`;

export const H2sobre = styled.h2`
    font-size: 56px;
    font-weight: 600;
    color: #EBE4F0;
    text-shadow: 3px 3px #000;
`;

export const Psobre = styled.p`
    font-size: 20px;
    color: #E9E4ED;
    width: 90%;
    line-height: 35px;
    letter-spacing: 2px;
`;

export const Figuresobre = styled.figure `
  display: flex;
  justify-content: space-around;
  width: 800px;
`;