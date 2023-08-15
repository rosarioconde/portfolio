import React from 'react'
import IconHero from './icons/IconHero'

const Presentation = () => {
  return (
    <section className="bg-white border-b my-8 py-8">
		<div className="container max-w-5xl mx-auto m-8 px-6 pt-14 lg:px-8">
			<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">.Frontend Developer.</h1>
			<div className="w-full mb-4  py-8">
				<div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>

            <div className="hidden mt-5 sm:mb-2 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Rosario Conde. {' '}
                <a href="https://www.linkedin.com/in/rosario-conde/" className="font-semibold text-indigo-600" target="_blank">
                </a>
              </div>
          </div>
			</div>

			<div className="flex flex-wrap  ">
				<div className="w-5/6 sm:w-1/2 p-6 ">
					<h3 className="text-3xl text-gray-800 font-bold leading-none mb-3  ">Job Opportunities</h3>
					<p className="text-gray-600 mb-8">  I am open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, please do not hesitate to contact me.<br /><br /> </p>
				</div>
				<div className="w-full sm:w-1/2 p-2 ">
            <IconHero />
				</div>
			</div>


		</div>
	</section>
  )
}

export default Presentation
