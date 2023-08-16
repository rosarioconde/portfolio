/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {getGoogleSheetsData} from "@/data/api";

export default async function Blog() {
  const range = `products!A:I`;
  const publications = await getGoogleSheetsData(range);

  return (
    <div className="mx-auto max-w-2xl max-w-6xl py-28 ">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8">
          {publications.map((publication) => {
            const [id, category, title, description, timeRead, datePublication, image] =
              publication;
            return (
              <div
                key={id}
                className="mx-auto mb-4 flex max-w-xs flex-col  rounded-xl border  border-gray-300 bg-white p-3 shadow-lg md:max-w-3xl md:flex-row"
              >
                <div className="grid w-full place-items-center bg-white p-2  md:w-1/3">
                  <img src={image} alt="tailwind logo" className="rounded-md " />
                </div>
                <div className="flex w-full flex-col bg-white pl-3  md:w-2/3   ">
                  <div className="item-center flex justify-between">
                    <p className="text-md hidden font-light text-gray-500 md:block">
                      {datePublication}
                    </p>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p className="ml-1 text-sm font-bold text-gray-600">
                        Read
                        <span className="font-normal text-gray-500"> - ({timeRead})</span>
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
                    <div className="hidden rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800 md:block">
                      {category}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-gray-800 md:text-2xl">{title}</h3>
                  <p className="mb-2 text-base text-gray-500 md:text-sm">{description}</p>
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
  );
}
