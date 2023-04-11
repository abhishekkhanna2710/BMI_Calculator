import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import "./Profile.css"

function Profile() {
    // const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const id = localStorage.getItem('id') || "5621632653626dsghdv";
                const response = await fetch(`http://localhost:8000/api/users/${id}`);
                const data = await response.json();
                setUser(data);
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchUser();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='profile'>
            <Navbar />
            <h1 >User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;
