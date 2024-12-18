import Image from "next/image";

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;
const response = await fetch(url);
const data = await response.json();

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center my-6">
        <h1 className="select-none text-yellow-50 font-semibold">
          Date: {data.date}
        </h1>
        <h1 className="select-none text-yellow-50 font-semibold">
          Title: {data.title}
        </h1>
      </div>

      <Image
        title={data.title}
        draggable="false"
        src={data.hdurl}
        alt={data.title}
        width={500}
        height={500}
        className="my-6"
      />
      <h1 className="select-none text-yellow-50 font-semibold">
        Author: {data.copyright}
      </h1>
      <h1 className="select-none text-yellow-50 font-semibold text-center my-8 px-10 sm:px-40">
        Explanation: {data.explanation}
      </h1>
    </main>
  );
}
