import React from 'react'

function AboutPage() {
  return (
    <>
     <section className="d-block bg-gray-100 pb-16 mt-16">
      {/* <div className="bg-gradient-to-r from-purple-800 to-purple-700 h-72"></div>     */}
      <div className="bg-gradient-to-r h-72"></div>
      <div className="px-2 sm:px-4 lg:px-8">
        {/* <div className="max-w-7xl bg-white dark:bg-slate-950 dark:text-gray-100 mx-auto px-2 sm:px-4 lg:px-8 -mt-16 rounded-md"> */}
        <div className="max-w-7xl bg-white border text-gray-900 mx-auto px-2 sm:px-4 lg:px-8 -mt-16 rounded-md">
          <div className="flex justify-center">
            <img src="/static/images/rosarioconde.jpeg" width="140" height="135" alt="Rosario Conde" className="-mt-16 rounded-full border-[2px] border-blue-400 ring-opacity-100" />
              </div>
            <header className="text-center p-4">
        <h1 className="font-bold text-3xl">  Rosario Conde</h1>
        <p className="text-blue-900 ">
         Frontend Developer
        </p> 
            <div className="flex justify-center mt-5">
                    <a href="https://www.linkedin.com/in/rosario-conde/" target='_blank' className="text-blue-500 hover:text-blue-700 mx-3">
                      <FaLinkedin size={30}/>
                      </a>
                      <a href="https://github.com/rosarioconde" target='_blank' className="text-blue-500 hover:text-blue-700 mx-3">
                      <FaGithub size={30}/>
                      </a>
                  </div>
            <p className="font-light text-xl mt-4 mx-8 md:mx-16 ">
            I am a Frontend Developer with 8 years of experience in the industry, working on building websites and web applications. My experience includes working with technologies and languages such as React, Next, TypeScript, Vue, and many more.
            </p>
        </header>
   
        </div>
        </div>
        </section>


</>

  )
}

export default AboutPage
