import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { useEffect, useState } from "react";
import img from "./../../assets/img.jpg";
import { BiCategory } from "react-icons/bi";

function ClaimDetails() {
  const { id } = useParams(); // Extract the `id` from the URL
  const navigate = useNavigate(); // Initialize the navigate hook
  const [claim, setClaim] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Mock data fetching based on the claim ID (replace with your actual logic)
  useEffect(() => {
    const fetchClaim = async () => {
      // Mock fetching logic
      const data = {
        id: id,
        name: "Sample Item",
        category: "item",
        quantity: 2,
        message: "This is a sample claim.",
        pickupDetails: "Sample Pickup Location",
      };
      setClaim(data);
    };

    fetchClaim();
  }, [id]);

  // Handle claiming the item
  const handleClaim = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`http://localhost:8080/items/claim/${id}`);

      if (response.ok) {
        // Handle success
        alert("Item claimed successfully!");
        navigate("/"); // Navigate to home after claiming
      } else {
        throw new Error("Failed to claim item.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to claim the item. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!claim) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="pt-32 border-4 rounded-lg m-2 h-[100vh]">
        <h1 className="mb-8 text-center text-4xl font-bold">{claim.name}</h1>
        <div className="flex justify-center gap-10">
          <div
            id="img"
            className="h-[60vh] w-[40vw] rounded-2xl overflow-hidden"
          >
            <img src={img} alt="" className="h-full w-full object-cover" />
          </div>

          <div
            id="content"
            className="p-8 border-2 rounded-lg h-[60vh] max-w-[50vw] min-w-[50vw] flex flex-col gap-4 text-lg overflow-hidden"
          >
            <p>
              <span className="font-bold">Item Name :</span> {claim.name}
            </p>
            <p>
              <span className="font-bold">Quantity :</span> {claim.quantity}
            </p>
            <p>
              <span className="font-bold">Message : </span> {claim.message}
            </p>
            <p>
              <span className="font-bold">Category : </span> {claim.category}
            </p>
            <p>
              <span className="font-bold">Pick Up Details:</span>{" "}
              {claim.pickupDetails}
            </p>

            {/* Error message display */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="m-auto flex gap-20">
              <button
                onClick={handleClaim}
                disabled={isLoading}
                className="border-2 rounded-lg p-3 text-lg font-semibold hover:bg-indigo-600 hover:text-white"
              >
                {isLoading ? "Claiming..." : "Collect Now"}
              </button>
              <button className="border-2 rounded-lg p-3 text-lg font-semibold hover:bg-indigo-600 hover:text-white" onClick = {() => navigate("/")}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClaimDetails;
