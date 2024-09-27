import background from '..\\assets\\HeroSectionBackground.jpg'


export default function HeroSection() {

  return (
    <section className="bg-white">
      <div
        className="relative isolate bg-gradient-to-b from-transparent to-white bg-cover w-full h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>

        <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-lg leading-6 text-grey-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-semibold">
              Know about our mission -  {" "} 
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a> 
            </div>
          </div>
          
          <div className="text-center ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Power To Change Lives For The Better
            </h1>



            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
         {/* Fade effect at the bottom */}
         <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  )
}
