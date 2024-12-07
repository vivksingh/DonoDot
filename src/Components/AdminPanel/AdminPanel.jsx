import { useEffect, useState } from "react";

function AdminPanel() {
    const [items, setItems] = useState([]);
    const [loadingItems, setLoadingItems] = useState(true);
    const [deletingItem, setDeletingItem] = useState(null); // Track item being deleted

    // Fetch items
    useEffect(() => {
        fetch("http://localhost:8080/items/all") // Ensure correct URL
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setItems(data);
                setLoadingItems(false);
            })
            .catch(err => {
                console.log(err);
                setLoadingItems(false);
            });
    }, []);

    // Handle delete item
    const handleDelete = (itemId) => {
        const token = localStorage.getItem("token");

        if (!token) {
            console.log("token not found");
            return;
        }

        setDeletingItem(itemId); // Show loading state for delete
        fetch(`http://localhost:8080/items/delete/${itemId}`)
        .then(response => {
            setDeletingItem(null); // Clear loading state
            if (!response.ok) {
                throw new Error(`Failed to delete item. Status: ${response.status}`);
            }
            setItems(prevItems => prevItems.filter(item => item.id !== itemId));
        })
        .catch(err => {
            setDeletingItem(null);
            console.log(err);
        });
    };

    return (
        <div className="pt-48 min-h-screen p-10 bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-10">Admin Panel</h1>

            {/* Items Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-5">All Items</h2>
                {loadingItems && <p>Loading items...</p>}
                
                {!loadingItems && (
                    <table className="table-auto w-full border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 px-4 py-2">ID</th>
                                <th className="border border-gray-400 px-4 py-2">Name</th>
                                <th className="border border-gray-400 px-4 py-2">Description</th>
                                <th className="border border-gray-400 px-4 py-2">Claimed</th>
                                <th className="border border-gray-400 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td className="border border-gray-400 px-4 py-2">{item.id}</td>
                                    <td className="border border-gray-400 px-4 py-2">{item.name}</td>
                                    <td className="border border-gray-400 px-4 py-2">{item.message}</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {item.claimed ? "Yes" : "No"}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            disabled={deletingItem === item.id}
                                            className={`px-4 py-2 rounded ${
                                                deletingItem === item.id
                                                    ? "bg-gray-400 text-white"
                                                    : "bg-red-500 text-white hover:bg-red-600"
                                            }`}
                                        >
                                            {deletingItem === item.id ? "Deleting..." : "Delete"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    );
}

export default AdminPanel;
