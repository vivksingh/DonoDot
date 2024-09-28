import bg from "..\\assets\\donatebg.jpeg"

function DonatePageHero() {
  return (
      <section>
        <div className="isolate bg-cover w-full h-screen pt-32"
            style = {
              {
                backgroundImage: `linear-gradient(rgba(255,255,255,0.60), rgba(255,255,255,1)), url(${bg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>

              <div className="flex flex-col gap-8 justify-center items-center">
                <h1 className="pt-12 text-lg font-bold tracking-tight text-gray-900 sm:text-6xl">
                  SAVE A LIFE TODAY
                </h1>

                <div className="p-4 w-[70vw] h-[30vh] text-center">Globally, an estimated 150 million people are homeless, with many more facing inadequate housing or living in precarious conditions. Around 9 million people die of hunger and related causes every year, a stark reminder of widespread food insecurity. More than 800 million people worldwide are undernourished, and billions face poverty, lack of access to healthcare, clean water, and basic human needs. These statistics highlight the vast number of individuals who urgently need help and support, underscoring the importance of global efforts to combat homelessness, starvation, and poverty.
                </div>

                <div className="flex items-center justify-center gap-x-6">
                  <a
                    href="#donate-form"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Donate Now!
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
        </div>
          <hr className="w-[80vw] mx-auto border-t-4"/>
      </section>
  );
}

export default DonatePageHero;