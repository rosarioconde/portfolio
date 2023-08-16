import Image from "next/image";
import {FaGithub, FaLinkedin} from "react-icons/fa";

function AboutPage() {
  return (
    <>
      <section className="d-block mt-16 bg-gray-100 pb-16">
        {/* <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-72"></div>     */}
        <div className="h-72 bg-gradient-to-r"></div>
        <div className="px-2 sm:px-4 lg:px-8">
          {/* <div className="max-w-7xl bg-white dark:bg-slate-950 dark:text-gray-100 mx-auto px-2 sm:px-4 lg:px-8 -mt-16 rounded-md"> */}
          <div className="mx-auto -mt-16 max-w-7xl rounded-md border bg-white px-2 text-gray-900 sm:px-4 lg:px-8">
            <div className="flex justify-center">
              <Image
                alt="Rosario Conde"
                src="/static/images/rosarioconde.jpeg"
                className="-mt-16 rounded-full border-[2px] border-blue-400 ring-opacity-100"
                width={140}
                height={135}
              />
            </div>
            <header className="p-4 text-center">
              <h1 className="text-3xl font-bold"> Rosario Conde</h1>
              <p className="text-blue-900 ">Frontend Developer</p>
              <div className="mt-5 flex justify-center">
                <a
                  href="https://www.linkedin.com/in/rosario-conde/"
                  target="_blank"
                  className="mx-3 text-blue-500 hover:text-blue-700"
                  rel="noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/rosarioconde"
                  target="_blank"
                  className="mx-3 text-blue-500 hover:text-blue-700"
                  rel="noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </div>
              <p className="mx-8 mt-4 text-xl font-light md:mx-16 ">
                I am a Frontend Developer with 8 years of experience in the industry, working on
                building websites and web applications. My experience includes working with
                technologies and languages such as React, Next, TypeScript, Vue, and many more.
              </p>
            </header>
          </div>
        </div>
        {/* </section>
      <section className="  border-b bg-gray-100  p-2 "> */}
        <div className="m-16  mx-auto max-w-7xl rounded-md border  bg-white  px-2 text-gray-900 sm:px-4 lg:px-8">
          <div className=" p-6  ">
            <h4 className="mb-3 text-2xl font-bold leading-none text-gray-800  ">
              Job Opportunities
            </h4>
            <p className="mb-8 text-gray-600">
              {" "}
              I am open to job opportunities where I can contribute, learn, and grow. If you have a
              good opportunity that matches my skills and experience, please do not hesitate to
              contact me.
              <br />
              <br />{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
