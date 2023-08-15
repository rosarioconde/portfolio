import React from 'react'

export default function Article({publication}) {
  const [ id, category, title, description, timeRead, datePublication, image, example, tip] = publication;

  return (
    <>
    <div key={id} className="mb-4 mt-16 md:mb-0 w-full max-w-screen-md mx-auto h-80 relative ">
        <div className="absolute left-0 bottom-0 w-full h-full z-10"
       style={{
        backgroundImage:
          'linear-gradient(180deg,transparent,rgba(0,0,0,.7));',
      }}></div>
     <img src={image} className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-xl" />
    <div className="p-4 absolute bottom-0 left-0 z-20">
      <a href="#"
        className="px-4 py-1 bg-slate-700 opacity-80 p-2 text-gray-200 inline-flex items-center justify-center mb-2">{category}</a>
      <h2 className="text-4xl font-semibold  p-2 bg-slate-700 opacity-80 text-gray-100 leading-tight">
       {title}
      </h2>
      <div className="flex mt-3  bg-slate-700 opacity-80 p-2">
        <img src="/static/images/rosarioconde.jpeg"
          className="h-10 w-10 rounded-full mr-2 object-cover" />
        <div>
          <p className="font-semibold text-gray-200 text-sm"> Rosario Conde - Read:  {timeRead}</p>
          <p className="font-semibold text-gray-400 text-xs"> {datePublication} </p>
        </div>
      </div>
    </div>
  </div>

  <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
    <p className="pb-6">{description}</p>

  <img src={example} alt="" className="rounded-xl" />
    <h4 className="text-2xl text-gray-800 font-semibold mb-4 mt-8">Tip</h4>
    <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
        {tip}
    </div>
  </div>
  </>
  )
}
