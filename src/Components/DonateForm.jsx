import { useEffect, useRef, useState } from "react";


function DonateForm() {
  const [isMoney, setIsMoney] = useState(true);
  const moneyRef = useRef();
  
  const handleCategoryChange = () => {
    const money = moneyRef.current.value === "money";
    setIsMoney(money);
  };

  return (
    <section id ="donate-form">
      <form className="mt-10 flex flex-col items-center justify-center" method="POST">
          <h1 className="text-2xl font-bold tracking-tight mb-10">Donation Form </h1>

          <div className="p-5 flex gap-5">
            <label className="" htmlFor="category">Category</label>
            <select className="border-2 w-[25vw]" id="category" name="category" defaultValue="money" ref={moneyRef} onChange={handleCategoryChange}>
              <option value="money">Money</option>
              <option value="food">Food</option>
              <option value="clothes">Clothes</option>
              <option value="utility">Utility</option>
            </select>

            <label className= {`${isMoney && `hidden`}`} htmlFor="item-name">Item Name</label>
            <input className={` ${isMoney && `hidden`} border-2 w-64`} type="text" name="item" id="item-name" placeholder="Whats your donation?" required />
          </div>

          <div className="p-5 flex gap-5">
            <label className="" htmlFor="message">Message</label>
            <textarea className="border-2 w-64" name="message" id="message" placeholder="Any message?" rows="1" />

            <label className="" htmlFor="quantity">Quantity</label>
            <input className="border-2 w-32" type="number" name="quantity" id="quantity" placeholder={`${isMoney ? `In Rupees` : `Quantity`}`} required />
          </div>

          <div className="p-5 flex gap-5">
            <label className="" htmlFor="pickup-details">Pickup Details</label>
            <textarea className="border-2 w-64" name="pickup-details" id="pickup-details" placeholder="PickUp Details" rows="1" required />
          </div>

          <button className="text-gray-900 p-2 rounded-lg mt-10 font-bold border-2 hover:text-white hover:bg-indigo-600">Submit</button>
      </form>
    </section>
  );
}

export default DonateForm;