/* eslint-disable @next/next/no-img-element */
import {getGoogleSheetsData} from "@/data/api";
import {Suspense} from "react";
import Loading from "@/components/Loading";
import Items from "@/components/Items";

export default async function Blog() {
  const range = `products!A:I`;
  const publications = await getGoogleSheetsData(range);

  return (
    <div className="mx-auto max-w-2xl max-w-6xl py-28 ">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8">
          {publications.map((publication) => {
            return (
              <div key={publication.id}>
                <Suspense fallback={<Loading />}>
                  <Items publication={publication} />
                </Suspense>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
