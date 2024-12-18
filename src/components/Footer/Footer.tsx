import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-10 bg-white text-black border-blue-500 border-b flex items-center justify-center font-bold text-2xl text-center select-none">
      <Link
        href={"https://www.julioreyes.dev"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600"
      >
        www.julioreyes.dev
      </Link>
    </div>
  );
};
