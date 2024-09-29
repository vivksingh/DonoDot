import ClaimCard from "./ClaimCard";
import bg from '../../assets/claimbg.jpeg';


function ClaimPage(){
    const items = [{
        id: `item-${Date.now()}-${Math.random()}`,
        name: "Food",
        quantity: 10,
        message: "This is a message",
        pickupDetails: "Pickup details"
    }, {
        id: `item-${Date.now()}-${Math.random()}`,
        name: "Clothes",
        quantity: 5,
        message: "This is a message",
        pickupDetails: "Pickup details"
    }, {
        id: `item-${Date.now()}-${Math.random()}`,
        name: "Medicine",
        quantity: 15,
        message: "This is a message",
        pickupDetails: "Pickup details"
    },{
        id: `item-${Date.now()}-${Math.random()}`,
        name: "Money",
        quantity: 2000,
        message: "This is a message",
        pickupDetails: "Pickup details"
    }];

    return (
        <section className="">
            <div className="pt-48 flex flex-col justify-center items-center" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.60), rgba(255,255,255,1)), url(${bg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                
            }}>
                <h1 className="text-3xl font-bold"> CLAIM A DONATION </h1>
                <div className="p-10 flex gap-10 flex-wrap">
                    {items.map(item => {
                        return (
                            <ClaimCard key={item.id} item={item} />
                        );
                    })}
                </div>
            </div>
        </section>
    );

}

export default ClaimPage;