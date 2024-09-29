

function ClaimCard({item}){
    return(

        <div className="p-5 border-2 border-gray-900 rounded-lg">
            <h1 className="text-2xl font-bold"> {item.name} </h1>
            <p className="text-lg"> Quantity: {item.quantity} </p>
            <p className="text-lg"> Message: {item.message} </p>
            <p className="text-lg"> Pickup Details: {item.pickupDetails} </p>
            <button className="text-gray-900 p-2 rounded-lg mt-10 font-bold border-2 hover:text-white hover:bg-indigo-600">Claim</button>
        </div>
    );
}

export default ClaimCard;