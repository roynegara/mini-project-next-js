import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import FoodLayout from "@/layout/FoodLayout";

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
    <FoodLayout>
      <div className="menu">
        <div>
          <h1 className="menu-title">Ini adalah Daftar Menu yang Tersedia</h1>
          <h1 className="menu-title-btn">
            Jika anda ingin menambahkan menu silahkan klik tombol<span> </span>
            <button onClick={() => handleMenuCreate()}> Tambah Menu</button>
          </h1>
        </div>

        <div className="menu-content">
          {data.map((food) => (
            <div className="menu-card" key={food.id}>
              {/* <p>ID Makanan : {food.id}</p> */}
              <h1 className="menu-card-title">Menu : {food.name}</h1>
              <p>Deskripsi : {food.description}</p>
              <p>Ingredients : {food.ingredients.join(", ")} </p>
              <img src={food.imageUrl} alt={food.name} />

              <div className="menu-card-footer">
                <button onClick={() => handleMenuDetail(food.id)}>Menu detail</button>
                <p>Rating : {food.rating}⭐</p>
                <p>Total Like : {food.totalLikes}👍 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FoodLayout>
  );
}
