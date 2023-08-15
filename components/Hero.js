import  IconHero from "./icons/IconHero";
import SocialIcon from "./social-icons";


const Hero = () => {
  return (
    <div
     className="relative isolate px-6 pt-14 lg:px-8 ">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(20%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[70deg] bg-gradient-to-tr from-[#d63f7e] to-[#3c31d3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Rosario Conde. {' '}
          <a href="https://www.linkedin.com/in/rosario-conde/" className="font-semibold text-indigo-600" target="_blank">
            <span className="absolute inset-0" aria-hidden="true" />
            Get in Touch. <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div> */}
     
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl sm:text-6xl">
        Frontend Developer.
        </h1>
      
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Diseño y Desarrollo soluciones °  That loves creating web apps.
        </p>
        <IconHero />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://www.linkedin.com/in/rosario-conde/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            target="_blank">
            Get in Touch
          </a>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a> */}
        </div>
   
      </div>
    </div>
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#dd4f8a] to-[#695fec] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  </div>
  )
}

export default Hero;
