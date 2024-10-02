import ClaimCard from "./ClaimCard";
import bg from '../../assets/claimbg.jpeg';


function ClaimPage(){
    const items = [{
        id: `item-${Date.now()}-${Math.random()*1000}`,
        name: "Food",
        quantity: 10,
        message: "Here something to eat! and dont eat soo much that your tummy hurts.",
        pickupDetails: "Pickup details"
    }, {
        id: `item-${Date.now()}-${Math.random()*1000}`,
        name: "Clothes",
        quantity: 5,
        message: "These are my old clothes that dont fit me anymore",
        pickupDetails: "Pickup details"
    }, {
        id: `item-${Date.now()}-${Math.random()*1000}`,
        name: "Medicine",
        quantity: 15,
        message: "These are some medicines that I dont need anymore",
        pickupDetails: "Pickup details"
    },{
        id: `item-${Date.now()}-${Math.random()*1000}`,
        name: "Money",
        quantity: 2000,
        message: "This is my salary, dont let my wife know",
        pickupDetails: "Pickup details"
    },{
        id: `item-${Date.now()}-${Math.random()*1000}`,
        name: "Food",
        quantity: 10,
        message: "Here something to eat! and dont eat soo much that your tummy hurts.",
        pickupDetails: "Pickup details"
    }, {
        id: `item-${Date.now()}-${Math.random()*1000}`,
        name: "Clothes",
        quantity: 5,
        message: "These are my old clothes that dont fit me anymore",
        pickupDetails: "Pickup details"
    }, {
        id: `item-${Date.now()}-${Math.random()*1000}`,
        name: "Medicine",
        quantity: 15,
        message: "These are some medicines that I dont need anymore",
        pickupDetails: "Pickup details"
    },{
        id: `item-${Date.now()}-${Math.random()*1000}`,
        name: "Money",
        quantity: 2000,
        message: "This is my salary, dont let my wife know",
        pickupDetails: "Pickup details"
    }];

    return (
        <section className="">
            <div className="pt-48 min-h-screen flex flex-col justify-center items-center" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.60), rgba(255,255,255,1)), url(${bg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                
            }}>
                <h1 className="text-4xl font-bold"> CLAIM A DONATION </h1>
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