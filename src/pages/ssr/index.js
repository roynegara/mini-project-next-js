// import { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';

//   const response = await axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
//     headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' }
//   });

export async function getServerSideProps() {
    
  const resp = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
      headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },

      
  });
    return { props: { foods: resp.data.data } };
}



export default function Home({ foods }) {
    const router = useRouter();

    const handleMenuDetail = (id) => {
      router.push(`/ssr/${id}`);
    };


    return (
    <div>
      {foods.map((food) => (
        <div key={food.id}>
              <h1>Nama Makanan : {food.name}</h1>
              <h1>Deskripsi Makanan : {food.description}</h1>
              <img width={200} src={food.imageUrl} alt={food.name} />
              <button onClick={() => handleMenuDetail(food.id) }>Menu detail</button>
        </div>
      ))}
    </div>
  );
}
