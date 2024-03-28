import axios from "axios";
import FoodForm from "@/components/FoodForm";
import usePost from "@/hooks/usePost";
import FoodLayout from "@/layout/FoodLayout";

export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.idMakanan}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", kataKunci: "Kopi enak bikin kembung" },
  });

  return { props: { food: resp.data.data } };
}

export default function FoodDetailPage({ food }) {
  const { loading, post } = usePost();

  const handleToUpdateFood = async ({ name, imageUrl, description, ingredients }) => {
    post(`/update-food/${food.id}`, { name, imageUrl, description, ingredients });
  };

  return (
    <FoodLayout>
      <img src={food?.imageUrl} className="w-64 aspect-video" />
      <FoodForm
        title={`Update ${food.name}`}
        defaultNama={food.name}
        defaultUrlGambar={food.imageUrl}
        loading={loading}
        onSubmitFood={handleToUpdateFood}
      />
    </FoodLayout>
  );
}

// import FoodForm from "@/components/FoodForm";
// import axios from "axios";
// import usePost from "@/hooks/usePost";
// import FoodLayout from "@/layout/FoodLayout";

// export async function getServerSideProps(context) {
//   //   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.query.id}`, {
//   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
//     headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", keyWord: "Dibimbing API key" },
//   });
//   return { props: { food: resp.data.data } };
// }

// export default function Home({ food }) {
//   const { loading, post } = usePost();

//   const handleUpdatedFood = async ({ name, imageUrl, description, ingredients }) => {
//     post(`/update-food/${food.id}`, {
//       name,
//       imageUrl,
//       description,
//       ingredients,
//     });
//   };

//   return (
//     <div className="idFoodForm">
//       <FoodLayout>
//         <img width={200} src={food?.imageUrl} alt={food.name} />
//         <div>
//           <FoodForm
//             title={`Update Detail ${food.name} ?`}
//             // titleDelete={`Delete ${food.name} ?`}
//             detailDescription={`Deskripsi menu : ${food.description}`}
//             detailIngredients={`Bahan-bahannya terbuat dari : ${food.ingredients.join(", ")}`}
//             detailRating={`Rating menu : ${food.rating}⭐`}
//             detailLikes={`Total yang menyukai :  ${food.totalLikes}👍`}
//             defaultIngredients={food.ingredients}
//             defaultName={food.name}
//             defaultUrlImage={food.imageUrl}
//             defaultDescription={food.description}
//             loading={loading}
//             onSubmit={handleUpdatedFood}

//           />
//         </div>
//       </FoodLayout>
//     </div>
//   );
// }

// import axios from "axios";
// import { useState } from "react";
// import FoodForm from "@/components/FoodForm";

// export default function CreateFood() {
//     const [loading, setLoading] = useState(false);
//     const handleCreate = async (event) => {
//       const [loading, setLoading] = useState(false);
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const name = formData.get("foodName");
//     const image = formData.get("foodImg");

//     setLoading(true);

//     await axios.post(
//       "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
//       {
//         name,
//         imageUrl: image,
//         description: "",
//         ingredients: [],
//       },
//       {
//         headers: {
//           apiKey: "w05KkI9AWhKxzvPFtXotUva-",
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
//         },
//       }
//       );
//       setLoading(false);
//   };

//   return (
//     <form onSubmit={handleCreate}>
//       <h5>Buat Makanan</h5>
//       <label>Nama: </label>
//       <input name="foodName" placeholder="input food name" />

//       <label>URL Gambar: </label>
//       <input name="foodImg" placeholder="url image" />

//           <button type="submit"
//               disabled={loading}
//              className={loading ? "loading" : ""}
//               >Submit</button>
//     </form>
//     );

// }
