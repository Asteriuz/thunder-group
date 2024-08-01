import Image, { StaticImageData } from "next/image";
import { HiPlay } from "react-icons/hi2";

type ExploreCardProps = {
  title: string;
  image: string | StaticImageData;
  size: "small" | "large";
  id?: string;
};

export default function ExploreCard({
  title,
  image,
  size,
  id,
}: ExploreCardProps) {
  return (
    <div
      className={`w-full ${size === "small" ? "md:w-1/2" : ""} group md:p-2`}
    >
      <div className="relative">
        <Image
          alt={title}
          className="block h-full w-full rounded-lg object-cover object-center"
          src={image}
          width={1125}
          height={750}
        />
        <div className="absolute inset-0 z-20 rounded-lg bg-black opacity-30 transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
        <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="absolute bottom-8 left-8 bg-opacity-50">
            <h3 className="text-2xl font-bold uppercase  text-white">
              {title}
            </h3>
          </div>
          <button
            id={`trailer-button-${id}`}
            className="trailer-button relative z-40 flex cursor-pointer items-center justify-center rounded-full bg-white p-2"
          >
            <div className="absolute left-0 top-0 h-full w-full scale-125 animate-[pulse-lg_2s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-white opacity-50" />
            <HiPlay className="z-20 text-3xl text-black" />
          </button>
          <dialog id={`trailer-modal-${id}`} className="modal">
            <div
              id="trailer-box"
              className="modal-box aspect-video max-w-screen-md bg-black p-0"
            >
              <div id={id} className="overflow-visible"></div>
            </div>
            <form
              method="dialog"
              id="trailer-modal-backdrop"
              className="modal-backdrop"
            >
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
}
