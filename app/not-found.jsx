import Link from "next/link";
import SecondaryNavbar from "@/components/navbar/SecondaryNavbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "404 || Not Found",
};

const NotFound = () => {
  return (
    <>
      <SecondaryNavbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Başlık ve Görsel */}
        <div className="text-center px-5">
          <h1 className="text-[200px] font-extrabold leading-none text-primary opacity-20 select-none">
            404
          </h1>
          <h2 className="text-5xl font-bold mb-4">Oops! Page Not Found</h2>
          <p className="text-lg mb-8">
            Sorry, the page you are looking for does not exist or has been
            removed. Let's get you back on track!
          </p>
          <Link href="/" className="btn btn-primary px-6 py-3 text-lg">
            Go Back Home
          </Link>
        </div>

        {/* Dekoratif Bölüm */}
        <div className="relative mt-10">
          <svg
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 text-primary opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 21.6a9.6 9.6 0 119.6-9.6 9.6 9.6 0 01-9.6 9.6z"></path>
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
