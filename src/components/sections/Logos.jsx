import React from "react";
import Image from "react-bootstrap/Image";
import LogoOne from "../../assets/logos/logo-1.svg";
import LogoTwo from "../../assets/logos/logo-2.svg";
import LogoThree from "../../assets/logos/logo-3.svg";
import LogoFour from "../../assets/logos/logo-4.svg";
import LogoFive from "../../assets/logos/logo-5.svg";
import LogoSix from "../../assets/logos/logo-6.svg";
import LogoSeven from "../../assets/logos/logo-7.svg";
import LogoEight from "../../assets/logos/logo-8.svg";
import LogoNine from "../../assets/logos/logo-9.svg";
import LogoTen from "../../assets/logos/logo-10.svg";

const Logos = () => {
  return (
    <>
      {[
        LogoOne,
        LogoTwo,
        LogoThree,
        LogoFour,
        LogoFive,
        LogoSix,
        LogoSeven,
        LogoEight,
        LogoNine,
        LogoTen,
      ].map((img, id) => (
        <Image src={img} key={id} className="px-4" width={200} />
      ))}
    </>
  );
};

export default Logos;
