import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFoods = async () => {
    try {
      const response = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/`, {
        headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
      });
      setData(response.data.data);
      console.log("respose", response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching foods:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {food.map((item) => (
          <div key={item.id}>
            <h1> Nama Makanan : {item.name}</h1>
            <img src={food.imageUrl} alt={food.name} />
          </div>
        ))}
      </div>

      <div>
        {data.map((food) => (
          <div key={food.id}>
            <img src={food.imageUrl} alt={food.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
