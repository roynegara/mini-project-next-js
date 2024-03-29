import axios from "axios";
import FoodLayout from "@/layout/FoodLayout";
import FoodForm from "@/components/FoodForm";
import FoodFormDelete from "@/components/FoodFormDelete";
import usePost from "@/hooks/usePost";
import useDelete from "@/hooks/useDelete";
import { useRouter } from "next/router";

// import { useEffect } from "react";

export async function getServerSideProps(context) {
  //   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.query.id}`, {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", keyWord: "Dibimbing API key" },
  });
  return { props: { food: resp.data.data } };
}

export default function FoodDetailPage({ food }) {
  const router = useRouter();
  const { loading, pos } = usePost();
  const { loading: loadingDelete, del } = useDelete();

  // const refreshPage = () => {
  //   router.replace(router.asPath);
  // }

  //   useEffect(() => {
  //     if (!loading && pos.succes) {
  //       refreshPage();
  //     }
  //   } , [loading, pos.succes]);

  // useEffect (() => {
  //   if (!loadingDelete && del.succes) {
  //     router.push("/");
  //   }
  // } , [loadingDelete, del.succes]);

  const handleBack = () => {
    router.push("/");
  };

  const handleUpdateFood = async ({ name, imageUrl, description, ingredients, rating, totalLikes }) => {
    pos(`/update-food/${food?.id}`, {
      name,
      imageUrl,
      description,
      ingredients,
      rating,
      totalLikes,
    });
    router.push(`/detail/${food?.id}`);
  };

  const handleDeleteFood = async () => {
    del(`/delete-food/${food?.id}`);
    router.push("/");
  };

  return (
    <FoodLayout>
      <div>
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
            defaultRating={food.rating}
            defaultTotalLikes={food.totalLikes}
            loading={loading}
            onSubmit={handleUpdateFood}
          />

          <FoodFormDelete title={`Delete ${food.name} ?`} loading={loadingDelete} onDelete={handleDeleteFood} />
          <button onClick={handleBack}>Back to Home</button>
        </div>
      </div>
    </FoodLayout>
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
