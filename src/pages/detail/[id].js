import axios from "axios";
import FoodLayout from "@/layout/FoodLayout";
import FoodForm from "@/components/FoodForm";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  //   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.query.id}`, {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", keyWord: "Dibimbing API key" },
  });
  return { props: { food: resp.data.data } };
}

export default function FoodDetailPage({ food }) {
  const router = useRouter();
  const { loading, post } = usePost();

  const handleBack = () => {
    router.push("/");
  };

  // const handleToDeletePage = () => {
  //   router.push("/delete/delete");
  // };

  // const handleToUpdatePage = () => {
  //   router.push("/update/update/" + food.id);
  // };
  const handleUpdateFood = async ({ name, imageUrl, description, ingredients }) => {
    post(`/update-food/${food.id}`, {
      name,
      imageUrl,
      description,
      ingredients,
    });
  };

  return (
    <div>
      <FoodLayout>
        <img width={200} src={food?.imageUrl} alt={food.name} />
        <div>
          <h1>{`${food.name}`}</h1>
          <h1>{`Deskripsi menu : ${food.description}`}</h1>
          <h1>{`Bahan-bahannya terbuat dari : ${food.ingredients.join(", ")}`}</h1>
          <h1>{`Rating menu : ${food.rating}⭐`}</h1>
          <h1>{`Total yang menyukai :  ${food.totalLikes}👍`}</h1>
          
          <FoodForm
            title={`Update ${food.name}`}
            defaultNama={food.name}
            defaultUrlGambar={food.imageUrl}
            defaultDeskripsi={food.description}
            defaultIngredients={food.ingredients}
            loading={loading}
            onSubmitFood={handleUpdateFood}
          />

          <button onClick={handleBack}>Back to Home</button>
          {/* <button onClick={handleToDeletePage}>Delete This Menu</button>
          <button onClick={handleToUpdatePage}>Edit This Menu</button> */}
        </div>
      </FoodLayout>
    </div>
  );
}

// ========================

// import FoodForm from "@/components/FoodForm";
// import axios from "axios";
// import usePost from "@/hooks/usePost";
// import FoodLayout from "@/layout/FoodLayout";
// import ProductDetailPage from "@/pages/product/[productName]"

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

//   const handleDeleteFood =  async ({ name, imageUrl, description, ingredients }) => {
//     axios.delete(`/delete-food/${food.id}`, {
//       name,
//       imageUrl,
//       description,
//       ingredients,
//     });
//   };

//   return (
//     <FoodLayout>
//       <ProductDetailPage/>
//       <img width={200} src={food?.imageUrl} alt={food.name} />

//       <FoodForm
//         title={`Anda akan mengupdate menu : ${food.name}`}
//         detailDescription={`Deskripsi menu : ${food.description}`}
//         detailIngredients={`Bahan-bahannya terbuat dari : ${food.ingredients.join(", ")}`}
//         detailRating={`Rating menu : ${food.rating}⭐`}
//         detailLikes={`Total yang menyukai :  ${food.totalLikes}👍`}

//         defaultIngredients={food.ingredients}
//         defaultName={food.name}
//         defaultUrlImage={food.imageUrl}
//         defaultDescription={food.description}
//         loading={loading}
//         onSubmit={handleUpdatedFood}
//         onDelete={handleDeleteFood}
//       />
//     </FoodLayout>
//   );
// }
