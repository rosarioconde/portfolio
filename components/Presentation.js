import IconHero from "./icons/IconHero";

const Presentation = () => {
  return (
    <section className="my-8 border-b bg-white py-8">
      <div className="container m-8 mx-auto max-w-5xl px-6 pt-14 lg:px-8">
        <h1 className="my-2 w-full text-center text-5xl font-bold leading-tight text-gray-800">
          .Frontend Developer.
        </h1>
        <div className="mb-4 w-full  py-8">
          <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>

          <div className="mt-5 hidden sm:mb-2 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Rosario Conde.{" "}
              <a
                href="https://www.linkedin.com/in/rosario-conde/"
                className="font-semibold text-indigo-600"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap  ">
          <div className="w-5/6 p-6 sm:w-1/2 ">
            <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800  ">
              Job Opportunities
            </h3>
            <p className="mb-8 text-gray-600">
              {" "}
              I am open to job opportunities where I can contribute, learn, and grow. If you have a
              good opportunity that matches my skills and experience, please do not hesitate to
              contact me.
              <br />
              <br />{" "}
            </p>
          </div>
          <div className="w-full p-2 sm:w-1/2 ">
            <IconHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
