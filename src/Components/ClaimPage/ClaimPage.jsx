import { useEffect, useState } from "react";
import ClaimCard from "./ClaimCard";
import bg from '../../assets/claimbg.jpeg';

function ClaimPage() {
    const [items, setItems] = useState([]); // State to store items
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        // Fetch items from the backend
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:8080/items/all'); // Replace with your backend URL
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data); // Update state with fetched items
            } catch (err) {
                setError(err.message); // Handle error
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchItems();
    }, []); // Empty dependency array to run the effect once on component mount

    return (
        <section>
            <div
                className="pt-48 min-h-screen flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.60), rgba(255,255,255,1)), url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <h1 className="text-4xl font-bold">COLLECT A DONATION</h1>
                <div className="p-10 flex gap-10 flex-wrap">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : items.length > 0 ? (
                        items.map((item) => <ClaimCard key={item.id} item={item} />)
                    ) : (
                        <p>No items available to display.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ClaimPage;
