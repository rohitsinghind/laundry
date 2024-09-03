import React from 'react';
import ContactBtn from './contactBtn';

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className }) => {
  return (
    <section className={className}>
      <div className="py-28 px-2">
        <h1 className="text-white font-bold md:text-4xl text-2xl text-center uppercase">
          {title}
        </h1>
        <h2 className="text-white font-semibold md:text-2xl text-lg text-center mt-4">
          COMPANY NAME
        </h2>
      </div>
      <div className="w-full bg-black/50 flex justify-center items-center sm:gap-6 gap-3 py-4 px-2">
        <h2 className="text-center text-white font-semibold md:text-xl sm:text-base text-sm">
          Ready to make a change?
        </h2>
        <div className="flex flex-col justify-center">
          <ContactBtn className="w-fit mx-auto bg-cyan-400 hover:bg-transparent border rounded border-cyan-400 text-white hover:text-cyan-400 py-2.5 px-6 font-semibold md:text-lg text-sm flex justify-center items-center gap-2 delay-50 duration-300 fill-white hover:fill-cyan-400">
            SCHEDULE AN ESTIMATE
            <span aria-hidden="true">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 56 56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 23.7109 37.0469 C 22.6327 37.7031 21.4140 37.1875 21.4140 36.0625 L 21.4140 19.9375 C 21.4140 18.8594 22.7030 18.3906 23.7109 18.9766 L 36.8827 26.7812 C 37.8436 27.3437 37.8671 28.6797 36.8827 29.2656 Z"></path>
              </svg>
            </span>
          </ContactBtn>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
