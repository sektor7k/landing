import SimpleNavbarWithHoverEffects from '@/components/navbar/SimpleNavbarWithHoverEffects'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: '404 || Not Found',
}

const NotFound = () => {
  return (
    <>
      <SimpleNavbarWithHoverEffects />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-900 dark:bg-black dark:text-white">
        <div className="px-5 text-center">
          <h1 className="select-none text-[200px] font-extrabold leading-none dar:text-red-500 opacity">404</h1>
          <h2 className="mb-4 text-5xl font-bold">Oops! Page Not Found</h2>
        </div>
        <div className="relative mt-10">
          <svg
            className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 transform text-primary opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 21.6a9.6 9.6 0 119.6-9.6 9.6 9.6 0 01-9.6 9.6z" />
          </svg>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
