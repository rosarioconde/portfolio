
import { getGoogleSheetsData } from "@/data/api";

export default async function blog({ params: { id }}) {
  const range = `products!A${id}:G${id}`;
  const publications = await getGoogleSheetsData(range);

  return (
    <div className="mx-auto max-w-2xl max-w-6xl py-16 p-4">
        <div className="flex flex-col justify-center items-center">
          <div className="m-8">
            {publications.map((publication)  => {
                const [id, category, title, description] = publication;
               return (
                <div key={id}>
                <div>{category}</div>
                <div>{title}</div>
                <div><img width="400" src="../../../../static/images/next.png" /></div>
                <div>{description}</div>
                </div>
               )
            })}
          </div>
        </div>
    </div>
  );
}
