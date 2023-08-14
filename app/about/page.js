import Timeline from '@/components/Timeline';
import Image from 'next/image'
import React from 'react'
import { FaReact, FaJs, FaNodeJs, FaCss3, FaHtml5, FaBootstrap, FaLinkedin, FaGithub } from 'react-icons/fa';

function AboutPage() {
  return (
    <>
    {/* <div class="flex ">
      <div class="w-1/2">
        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
            I'm a <strong>Frontend Web Developer</strong> building the
            Websites and Web Applications that leads to the
            success of the overall product. Check out some of my work in the
            <strong> Projects</strong> section.
          </p>
          <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
            I also like sharing content related to the stuff that I have
            learned over the years in <strong>Web Development</strong> so it
            can help other people of the Dev Community. Feel free to Connect
            or Follow me on my
            <a rel="noreferrer" href="https://www.linkedin.com/in/rosario-conde/" target="_blank"> Linkedin</a>.
            where I post useful content related to Web Development and
            Programming
          </p>
          <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
            I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to
            <strong> contact</strong> me.
          </p></div>

          <div class="w-1/2">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          </div>
    </div>
     <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
    */}

    <div className="mx-auto max-w-2xl max-w-6xl py-16 p-4">
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center rounded-[20px] max-w-2xl max-w-6xl mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover " >
                    <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="flex h-32 w-full justify-center rounded-xl bg-cover" />
                    <div className="absolute -bottom-12 flex h-[150px] w-[150px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                        <img className="h-full w-full rounded-full" src='/static/images/rosarioconde.jpeg' alt="" />
                    </div>
                </div>
                   <div className="mt-16 flex flex-col items-center">
                    <h4 className="text-2xl font-semibold text-navy-700 dark:text-white">
                   Rosario Conde
                    </h4>
                    <p className="text-base font-normal  text-indigo-600">Frontend Developer</p>
                    <div className="flex justify-center mt-5">
                    <a href="https://www.linkedin.com/in/rosario-conde/" target='_blank' className="text-blue-500 hover:text-blue-700 mx-3">
                      <FaLinkedin size={30}/>
                      </a>
                      <a href="https://github.com/rosarioconde" target='_blank' className="text-blue-500 hover:text-blue-700 mx-3">
                      <FaGithub size={30}/>
                      </a>
                  </div>
                    <div className="mt-5">
                      <h3 className="text-md font-semibold">Bio</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">I am a Frontend Developer with 8 years of experience in the industry, working on
                      building websites and web applications. My experience includes working with technologies and
                      languages such as React, Next, TypeScript, Vue, and many more.  </p>
                    </div>
                </div>


                <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                    <div className="flex flex-col items-center justify-center">
                      <p className="p-5" ><FaJs size={40}  /></p>
                      <p className="p-5"><FaReact  size={40} /></p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="p-5">  <FaBootstrap  size={40} /> </p>
                       <p className="p-5"><FaCss3  size={40} /></p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="p-5">  <FaNodeJs  size={40}  /> </p>
                      <p className="p-5"><FaHtml5  size={40}  /></p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col rounded-[20px] mt-3 max-w-2xl max-w-6xl  mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
            <h4 className="text-md font-semibold">Job Opportunities</h4>
            <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
            I am open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, please do not hesitate to contact me.
            </p>
          </div>

       {/* timeline */}
        <Timeline />
      </div>
</>

  )
}

export default AboutPage
