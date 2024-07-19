import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Data Not Found with this api", error);
            });
    }, []);

    return (
        <div>
            <h2>Mock Data Information</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            data.map((eachuser) => (
                                <tr key={eachuser.id}>
                                    <td>{eachuser.id}</td>
                                    <td>{eachuser.name}</td>
                                    <td>{eachuser.email}</td>
                                </tr>))
                        }
                </tbody>
            </table>
        </div>
    );
};

export default Table;
