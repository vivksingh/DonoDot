import bg from "..\\assets\\donatebg.jpeg"


function DonatePage() {
  return (
      <section>
        <div className="isolate bg-cover w-full h-screen"
            style = {
              {
                backgroundImage: `linear-gradient(rgba(255,255,255,0.60), rgba(255,255,255,1)), url(${bg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>

              <div className="">
              
              </div>
        </div>

        
      </section>
  );
}

export default DonatePage;