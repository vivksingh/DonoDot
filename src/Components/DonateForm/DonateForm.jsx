import { useEffect, useRef, useState } from "react";

function DonateForm() {
  const moneyRef = useRef();
  const [file, setFile] = useState(null);
  const [isMoney, setIsMoney] = useState(false);
  const [formData, setFormData] = useState({
    category: "food",
    item: "",
    message: "",
    quantity: "",
    pickupDetails: "",
  });


  const handleCategoryChange = () => {
    const money = moneyRef.current.value === "money";
    setIsMoney(money);
    setFormData({ ...formData, category: moneyRef.current.value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const data = new FormData();
    
    // Create a JSON object for the fields
    const donationData = {
      category: formData.category,
      message: formData.message,
      quantity: formData.quantity,
      ...(isMoney ? {} : {
        pickupDetails: formData.pickupDetails,
        name: formData.item,
        imageFile: file, 
      }),
    };

    console.log(donationData);
    // Append the JSON object and file to FormData
    data.append("imageFile", file); // Add image file
    data.append("item", new Blob([JSON.stringify(donationData)], { type: "application/json" }));

    try {
      const response = await fetch("http://localhost:8080/items/add", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("donate submitted")
        console.log("Donation submitted successfully");
      } else {
        alert("error")
        console.error("Failed to submit donation");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="donate-form">
      <form className="mt-10 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold tracking-tight mb-10">Donation Form</h1>

        <div className="p-5 flex gap-5">
          <label htmlFor="category">Category</label>
          <select
            className={`border-2 ${isMoney ? `w-[31vw]` : `w-48`}`}
            id="category"
            name="category"
            defaultValue="food"
            ref={moneyRef}
            onChange={handleCategoryChange}
          >
            <option value="money">Money</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="medicine">Medicine</option>
            <option value="utility">Utility</option>
          </select>

          <label className={`${isMoney && `hidden`}`} htmlFor="item-name">Item Name</label>
          <input
            className={`${isMoney && `hidden`} border-2 w-44`}
            type="text"
            name="item"
            id="item-name"
            placeholder=" What's your donation?"
            value={formData.item}
            onChange={handleInputChange}
            required={!isMoney}
          />
        </div>

        <div className="p-5 flex gap-5">
          <label htmlFor="message">Message</label>
          <textarea
            className="border-2 w-64"
            name="message"
            id="message"
            placeholder=" Any message?"
            rows="1"
            value={formData.message}
            onChange={handleInputChange}
          />

          <label htmlFor="quantity">Quantity</label>
          <input
            className="border-2 w-32"
            type="number"
            name="quantity"
            id="quantity"
            placeholder={`${isMoney ? ` In Rupees` : ` Quantity`}`}
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="p-5 flex gap-5">
          <label className={`${isMoney && `hidden`}`} htmlFor="pickup-details">Pickup Details</label>
          <textarea
            className={`${isMoney && `hidden`} border-2 w-52`}
            name="pickupDetails"
            id="pickup-details"
            placeholder=" PickUp Details"
            rows="1"
            value={formData.pickupDetails}
            onChange={handleInputChange}
            required={!isMoney}
          />
          <label className={`${isMoney && `hidden`}`} htmlFor="file">Submit Pictures</label>
          <input
            className={`${isMoney && `hidden`}`}
            type="file"
            name="file"
            id="file"
            onChange={handleFileChange}
          />
        </div>

        <button className="text-gray-900 p-2 rounded-lg mt-10 font-bold border-2 hover:text-white hover:bg-indigo-600">
          Submit
        </button>
      </form>
    </section>
  );
}

export default DonateForm;
