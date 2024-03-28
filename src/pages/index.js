import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const getFoods = async () => {
    try {
      const response = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
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

  // const handleMenuDetail = (id) => {
  //   router.push(`/update/${id}`);
  // };
  const handleMenuCreate = () => {
    router.push(`/create/create`);
  };

  const handleMenuDetail = (id) => {
    router.push(`/detail/${id}`);
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
        <h1>Menu did not in the list?</h1>
        <button onClick={() => handleMenuCreate()}>Create a Menu Here</button>
      </div>

      {data.map((food) => (
        <div key={food.id}>
          <h1>ID Makanan : {food.id}</h1>
          <h1>Nama Makanan : {food.name}</h1>
          <h1>Deskripsi Makanan : {food.description}</h1>
          <h1>Bahan Makanan : {food.ingredients.join(", ")} </h1>
          <img width={200} src={food.imageUrl} alt={food.name} />
          <button onClick={() => handleMenuDetail(food.id)}>Menu detail</button>

          <h1>Rating : {food.rating}⭐</h1>

          <h1>Total Like : {food.totalLikes}👍 </h1>
        </div>
      ))}
    </div>
  );
}
