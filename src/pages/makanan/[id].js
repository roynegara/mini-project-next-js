import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFoods = async () => {
    try {
      const response = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${router.query.id}`, {
        headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' }
      });
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching foods:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getFoods();
  }, []);

    if 
    
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((food) => (
        <div key={food.id}>
          <img src={food.imageUrl} alt={food.name} />
        </div>
      ))}
    </div>
  );
}
