import axios from "axios";
import { useState } from "react";
import FoodForm from "@/components/FoodForm";

export default function CreateFood() {
    const [loading, setLoading] = useState(false);
    const handleCreate = async (event) => {
      const [loading, setLoading] = useState(false);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("foodName");
    const image = formData.get("foodImg");

    setLoading(true);

    await axios.post(
      "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
      {
        name,
        imageUrl: image,
        description: "",
        ingredients: [],
      },
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
      );
      setLoading(false);
  };

  return (
    <form onSubmit={handleCreate}>
      <h5>Buat Makanan</h5>
      <label>Nama: </label>
      <input name="foodName" placeholder="input food name" />

      <label>URL Gambar: </label>
      <input name="foodImg" placeholder="url image" />

          <button type="submit"
              disabled={loading}
             className={loading ? "loading" : ""}
              >Submit</button>
    </form>
    );
    
    
}
