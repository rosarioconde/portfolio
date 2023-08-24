/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Article({publication}) {
  const [id, category, title, description, timeRead, datePublication, image, example, tip] =
    publication;
  return (
    <div key={id}>
      <div className="relative mx-auto mb-4 mt-16 h-80 w-full max-w-screen-md md:mb-0 ">
        <div className="absolute bottom-0 left-0 z-10 h-full w-full"></div>
        <img
          src={image}
          className="absolute left-0 top-0 z-0 h-full w-full rounded-xl object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 p-4">
          <a
            href="#"
            className="mb-2 inline-flex items-center justify-center bg-slate-700 p-2 px-4 py-1 text-gray-200 opacity-80"
          >
            {category}
          </a>
          <h2 className="bg-slate-700 p-2  text-4xl font-semibold leading-tight text-gray-100 opacity-80">
            {title}
          </h2>
          <div className="mt-3 flex  bg-slate-700 p-2 opacity-80">
            <img
              src="/static/images/rosarioconde.jpeg"
              className="mr-2 h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-200">
                {" "}
                Rosario Conde - Read: {timeRead}
              </p>
              <p className="text-xs font-semibold text-gray-400"> {datePublication} </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-screen-md px-4 text-lg leading-relaxed text-gray-700 lg:px-0">
        <p className="pb-6">{description}</p>

        <img src={example} alt="" className="rounded-xl" />
        <h4 className="mb-4 mt-8 text-2xl font-semibold text-gray-800">Tip</h4>
        <div className="mb-6 rounded border-l-4 border-gray-500 pl-4 italic">{tip}</div>
      </div>
    </div>
  );
}
