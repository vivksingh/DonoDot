import { useNavigate } from "react-router-dom";


function ClaimCard({ item }) {
  const navigate = useNavigate();

  const handleClaim = () =>{
    navigate(`/claim/${item.id}`)
  }


  return (
    <div className="p-5 overflow-hidden w-[21vw] h-[55vh] border-2 border-gray-900 rounded-lg flex flex-col gap-2 hover:border-indigo-600">
      {/* Content Section */}
      <div className="flex-grow">
        <h1 className="text-2xl font-bold pb-2"> {item.name} </h1>
        
        <p className="text-lg pb-2">
          <span className="font-semibold">Quantity: </span> {item.quantity}
        </p>
        <p className="text-lg pb-2">
          <span className="font-semibold">Message: </span>
          {item.message.substring(0, Math.min(60, item.message.length))} ...
        </p>
        <p className="text-lg">
          <span className="font-semibold">Pickup Details: </span>
          {item.pickupDetails.substring(0, Math.min(40, item.pickupDetails.length))} ...
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-auto">
        <button className="w-full text-gray-900 p-2 rounded-lg font-bold border-4 hover:text-white hover:bg-indigo-600" onClick={handleClaim}>
          Collect
        </button>
      </div>
    </div>
  );
}

export default ClaimCard;
