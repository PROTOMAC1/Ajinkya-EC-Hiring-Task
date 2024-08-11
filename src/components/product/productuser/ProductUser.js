import React, { useState, useEffect } from 'react';
import "./productuser.css"

const ProductUser = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaUBiNjguZGV2IiwiZXhwIjoxNzIyMzg3OTUyMzk1LCJpYXQiOjE3MjIzODQzNTJ9.L-jR6aEc-NFahNh6CMVk777HIeaJt3sQYOIn87tOsKM";

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://intern-task-api.bravo68web.workers.dev/api/me', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}` // Using the token in the Authorization header
                    }
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Error ${response.status}: ${errorText}`);
                }

                const data = await response.json();
                setEmail(data.user.sub);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>Error: {error}</div>;
    }

    return (
        <div id='user'>
            {email ? <h4>Login in as {email}</h4> : <h4>No email found.</h4>}
        </div>
    );
};

export default ProductUser;
