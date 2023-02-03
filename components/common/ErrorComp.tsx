import Link from "next/link";

const ErrorComp = () => {
  return (
    <div className="flex h-[calc(100vh-152px)] flex-col items-center justify-center space-y-5 font-bold text-white lg:h-full">
      <h1 className="text-3xl">Error Occured.</h1>
      <Link
        href="/"
        className="rounded-full bg-brand px-6 py-3 transition-all duration-75 ease-in-out hover:bg-brand-dark"
      >
        Go back to Home Page.
      </Link>
    </div>
  );
};

export default ErrorComp;
