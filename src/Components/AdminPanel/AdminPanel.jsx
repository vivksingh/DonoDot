import { useEffect, useState } from "react";

function AdminPanel() {
    const [items, setItems] = useState([]);
    const [users, setUsers] = useState([]);
    const [loadingItems, setLoadingItems] = useState(true);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [errorItems, setErrorItems] = useState(null);
    const [errorUsers, setErrorUsers] = useState(null);

    // Fetch items
    useEffect(() => {
        fetch("http://localhost:8080/items/all") // Replace with actual backend endpoint
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
                setErrorItems(err.message);
                setLoadingItems(false);
            });
    }, []);

    // Fetch users
    useEffect(() => {
        fetch("http://localhost:8080/users/all") // Replace with actual backend endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setLoadingUsers(false);
            })
            .catch(err => {
                setErrorUsers(err.message);
                setLoadingUsers(false);
            });
    }, []);

    return (
        <div className="pt-48 min-h-screen p-10 bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-10">Admin Panel</h1>

            {/* Items Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-5">All Items</h2>
                {loadingItems && <p>Loading items...</p>}
                {errorItems && <p className="text-red-500">Error: {errorItems}</p>}
                {!loadingItems && !errorItems && (
                    <table className="table-auto w-full border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 px-4 py-2">ID</th>
                                <th className="border border-gray-400 px-4 py-2">Name</th>
                                <th className="border border-gray-400 px-4 py-2">Description</th>
                                <th className="border border-gray-400 px-4 py-2">Claimed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td className="border border-gray-400 px-4 py-2">{item.id}</td>
                                    <td className="border border-gray-400 px-4 py-2">{item.name}</td>
                                    <td className="border border-gray-400 px-4 py-2">{item.description}</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {item.claimed ? "Yes" : "No"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>

            {/* Users Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-5">All Users</h2>
                {loadingUsers && <p>Loading users...</p>}
                {errorUsers && <p className="text-red-500">Error: {errorUsers}</p>}
                {!loadingUsers && !errorUsers && (
                    <table className="table-auto w-full border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 px-4 py-2">ID</th>
                                <th className="border border-gray-400 px-4 py-2">Username</th>
                                <th className="border border-gray-400 px-4 py-2">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className="border border-gray-400 px-4 py-2">{user.id}</td>
                                    <td className="border border-gray-400 px-4 py-2">{user.username}</td>
                                    <td className="border border-gray-400 px-4 py-2">{user.email}</td>
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
