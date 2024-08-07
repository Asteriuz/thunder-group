import Image from "next/image";
import ExploreCard from "./Utils/ExploreCard";
import Daiso1 from "@/assets/portfolio/daiso.webp";
import Daiso2 from "@/assets/portfolio/daiso2.webp";
import DanielPenim from "@/assets/portfolio/daniel-penin.webp";
import Porsche from "@/assets/portfolio/porsche.webp";
import StudioKolle from "@/assets/portfolio/studio-kolle.webp";
import StudioKolle2 from "@/assets/portfolio/studio-kolle2.webp";

export default function Explore() {
  return (
    <section
      id="portfolio"
      className="relative flex flex-col items-center justify-center"
    >
      <div className="mt-2 w-screen max-w-screen-xl px-5 py-8 md:mt-0 md:py-20 xl:px-0">
        <h2 className="mb-4 text-3xl font-bold tracking-wider text-white md:text-4xl">
          EXPLORE NOSSO TRABALHO
        </h2>
        <h3 className="text-xl tracking-wider text-white">
          APROVADO PELOS LÍDERES DO MERCADO
        </h3>
      </div>
      <div className="-mx-2 flex flex-col flex-wrap md:flex-row">
        <div className="flex flex-wrap md:w-1/2">
          <ExploreCard
            title="Daiso Natal"
            image={Daiso1}
            size="small"
            vimeoID="993750211"
          />
          <ExploreCard
            title="Daiso Receitas"
            image={Daiso2}
            size="small"
            vimeoID="993770374"
          />
          <ExploreCard
            title="Youtuber Daniel Penin"
            image={DanielPenim}
            size="large"
            ytID="LYL0-9-Zb5s"
          />
        </div>
        <div className="flex flex-wrap md:w-1/2">
          <ExploreCard
            title="Porsche Cup"
            image={Porsche}
            size="large"
            vimeoID="993770393"
          />
          <ExploreCard
            title="Studio Kolles"
            image={StudioKolle}
            size="small"
            vimeoID="993770328"
          />
          <ExploreCard
            title="Studio Kolles II"
            image={StudioKolle2}
            size="small"
            vimeoID="993770350"
          />
        </div>
      </div>
    </section>
  );
}
