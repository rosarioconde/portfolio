import Image from './Image'
import Link from './CustomLink'

const Card = ({ title, description, tech, imgSrc, href }) => (

//   <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
//   <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
//     <img className="w-full h-32 object-cover" src={imgSrc} alt={title} />
//     <div className="p-4">
//       <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
//       <p className="text-gray-600 dark:text-gray-400">{description}</p>
//       <a href={href} className="block mt-3 text-primary dark:text-secondary">
//         Learn More
//       </a>
//     </div>
//   </div>
// </div>

<div className="w-full md p-2 sm:w-1/2 md:w-1/2 lg:w-1/3" >
  {/* <div className="md p-4 md:w-1/2 " style={{ maxWidth: '544px' }}> */}
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href
          ? (
          <Link href={href} aria-label={`Link to ${title}`}>
           <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
            )
          : (
         <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
            ))}


      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href
            ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
              )
            : (
                title
              )}
        </h2>

        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="text-sm font-light mb-3 max-w-none text-gray-500 dark:text-gray-400">{tech}</div>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
