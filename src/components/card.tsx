import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

const Card: FC<CardProps> = ({ img, title, desc, link }) => {
  return (
    <Link
      href={link}
      className="border bg-white border-gray-300 rounded shadow max-w-96 delay-50 duration-300 hover:scale-105 hover:shadow-lg w-full reveal mx-auto"
    >
      <Image
        src={img}
        alt={title}
        width={600}
        height={300}
        className="h-48 w-full object-cover object-center"
      />
      <div className="sm:px-2.5 px-2 sm:py-8 py-6">
        <h2 className="font-bold text-center md:text-lg text-sm mb-2">
          {title}
        </h2>
        <p className="text-center text-sm mb-4">{desc}</p>
        <div className="flex flex-col justify-center">
          <div className="w-fit mx-auto bg-cyan-400 hover:text-cyan-400 hover:fill-cyan-400 fill-white hover:bg-transparent border rounded hover:border-cyan-400 py-2.5 px-6 font-semibold md:text-base text-sm flex justify-center items-center gap-2 text-white delay-50 duration-300">
            LEARN MORE{" "}
            <span>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 56 56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 23.7109 37.0469 C 22.6327 37.7031 21.4140 37.1875 21.4140 36.0625 L 21.4140 19.9375 C 21.4140 18.8594 22.7030 18.3906 23.7109 18.9766 L 36.8827 26.7812 C 37.8436 27.3437 37.8671 28.6797 36.8827 29.2656 Z"></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
