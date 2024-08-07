import Image from "next/image";
import BoticarioLogo from "@/assets/partners/boticario.webp";
import MelissaLogo from "@/assets/partners/melissa.webp";
import DaisoLogo from "@/assets/partners/daiso.webp";
import PorscheLogo from "@/assets/partners/porsche.webp";
import SKLogo from "@/assets/partners/sk.webp";
import VianaLogo from "@/assets/partners/viana.webp";
import VicLogo from "@/assets/partners/vic.webp";

export default function Partners() {
  return (
    <section>
      <div
        id="partners-partners"
        className="relative z-10 my-8 flex flex-col flex-wrap items-center font-body lg:hidden"
      >
        <h2 className="mb-10 text-center text-sm tracking-wider text-[#ffffff]">
          NOSSOS PARCEIROS DE CONFIANÇA
        </h2>
        <div
          id="grid-partners"
          className="grid grid-cols-2 items-center justify-items-center gap-y-12"
        >
          <Image
            src={BoticarioLogo}
            alt="Boticario"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <Image
            src={MelissaLogo}
            alt="Melissa"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <Image
            src={DaisoLogo}
            alt="Daiso"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          {/* <Image
            src={PorscheLogo}
            alt="Porsche"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          /> */}
          <Image
            src={SKLogo}
            alt="SK"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <Image
            src={VianaLogo}
            alt="Viana"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <Image
            src={VicLogo}
            alt="Vic"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
