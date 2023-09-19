import { useLottie } from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import { FooterContainer } from "./styles";
import cpu from "../../assets/animations/lottie/cpu.json";
import cat404 from "../../assets/animations/lottie/404-cat.json";
import plate404 from "../../assets/animations/lottie/404-plate.json";

const options404Plate = {
  animationData: plate404,
  loop: true,
  autoplay: true,
};
const style404Plate = {
  width: 220,
  marginTop: -80,
  marginLeft: -50,
  marginRight: -60,
  marginBottom: -80,
};
const options404Cat = {
  animationData: cat404,
  loop: true,
  autoplay: true,
};
const style404Cat = {
  width: 120,
  marginTop: -10,
  marginLeft: -10,
  marginRight: 20,
  marginBottom: -20,
};
const optionsCPU = {
  animationData: cpu,
  loop: true,
  autoplay: true,
};
const styleCPU = {
  width: 200,
  marginTop: -72,
  marginLeft: -75,
  marginRight: -75,
  marginBottom: -80,
};

const AnimationCreateBy = () => {
  const animation = [
    { options: options404Plate, style: style404Plate },
    { options: options404Cat, style: style404Cat },
    { options: optionsCPU, style: styleCPU },
  ];
  const indexRandom = Math.floor(Math.random() * animation.length);
  const { View } = useLottie(animation[indexRandom].options, animation[indexRandom].style);
  return View;
};

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="shadow"></div>
      <div className="lineCenter"></div>
      <div className="content">
        <div className="createBy">
          <AnimationCreateBy />
          Desenvolvido por Gilvan Gomes
        </div>
        <div className="socialMedia">
          <a href="http://github.com/GilvanG" target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};
