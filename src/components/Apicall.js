import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Apicall = () => {
    const [data, setData] = useState([]);

    // now call api for this will make a function

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

console.log(data)
    return (
        <div className="App">
      <h1>API Demo</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <h3>{item.userId}</h3>
          </li>
        ))}
      </ul>
    </div>
    )

}

export default Apicall