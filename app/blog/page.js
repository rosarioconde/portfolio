import Link from "next/link";
import { getGoogleSheetsData } from "@/data/api";

export default async function Blog() {
 const range = `products!A:I`;
 const publications = await getGoogleSheetsData(range);

 return (
  <div className="mx-auto max-w-2xl max-w-6xl py-28 ">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-8">
            {publications.map((publication)  => {
              const [id, category, title, description, timeRead, datePublication, image ] = publication;
                return (
                 <div key={id} className="mb-4 flex flex-col md:flex-row    p-3  rounded-xl shadow-lg  max-w-xs md:max-w-3xl mx-auto border border-gray-300 bg-white">
                  <div className="w-full md:w-1/3 bg-white grid place-items-center  p-2">
                      <img src={image} alt="tailwind logo" className="rounded-md " />
                  </div>
                    <div className="w-full md:w-2/3 bg-white flex flex-col  pl-3   ">
                      <div className="flex justify-between item-center">
                        <p className="text-gray-500 font-light text-md hidden md:block">{datePublication}</p>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <p className="text-gray-600 font-bold text-sm ml-1">
                          Read
                            <span className="text-gray-500 font-normal"> - ({timeRead})</span>
                          </p>
                        </div>
                        {/* <div className="">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd" />
                          </svg>
                        </div> */}
                        <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                        {category}</div>
                      </div>
                      <h3 className="font-black text-gray-800 md:text-2xl text-xl">{title}</h3>
                      <p className="md:text-sm text-gray-500 text-base mb-2">{description}</p>
                      <div className="text-sm text-blue-800 ">
                        <Link href={"/blog/" + id}>Ver más</Link>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
          </div>
    </div>
    )
}
