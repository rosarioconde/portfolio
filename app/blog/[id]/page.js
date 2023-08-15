
import Article from "@/components/Article";
import { getGoogleSheetsData } from "@/data/api";

export default async function blog({ params: { id }}) {
  const range = `products!A${id}:I${id}`;
  const publications = await getGoogleSheetsData(range);

  return (
    <>
    <div className="mx-auto max-w-2xl max-w-6xl py-16 p-4">
      <div className="flex flex-col justify-center items-center">
        <div className="m-8">
          {publications.map((publication) => {
            return (
               <Article key={publication.id} publication={publication} />
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
