import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`http://localhost:8000/api/users/${id}`);
                const data = await response.json();
                setUser(data);
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;