import FoodForm from "@/components/FoodFormDelete";
import axios from "axios";
import useDelete from "@/hooks/useDelete";
import FoodLayout from "@/layout/FoodLayout";

export default function Home({ food }) {
  const { del, loading } = useDelete();

  const handleDeleteFood = async () => {
    del(`/delete-food/${food.id}`);
  };

  return (
    <div className="idFoodForm">
      <FoodLayout>
        <img width={200} src={food?.imageUrl} alt={food.name} />
        <div>
          <FoodForm
            // title={`Delete ${food.name} ?`}
            titleDelete={`Delete ${food.name} ?`}
            detailDescription={`Deskripsi menu : ${food.description}`}
            detailIngredients={`Bahan-bahannya terbuat dari : ${food.ingredients.join(", ")}`}
            detailRating={`Rating menu : ${food.rating}⭐`}
            detailLikes={`Total yang menyukai :  ${food.totalLikes}👍`}
            defaultIngredients={food.ingredients}
            defaultName={food.name}
            defaultUrlImage={food.imageUrl}
            defaultDescription={food.description}
            loadingPost={loading}
            onSubmit={handleDeleteFood}
          />
        </div>
      </FoodLayout>
    </div>
  );
}

// import FoodForm from "@/components/FoodForm";
// import useDelete from "@/hooks/useDelete";
// import FoodLayout from "@/layout/FoodLayout";

// export default function DeleteFoodPage(food) {
//   const { del, loading } = useDelete();

//   const handleDelete = async () => {
//     del(`/delete-food/${food.id}`, );
//   };

//   return (
//     <FoodLayout>
//       <FoodForm
//         // title="Delete Makanan"
//         titleDelete={`Delete ${food.name} ?`}
//         detailDescription={`Deskripsi menu : ${food.description}`}
//         detailIngredients={`Bahan-bahannya terbuat dari : ${food.ingredients.join(", ")}`}
//         detailRating={`Rating menu : ${food.rating}⭐`}
//         detailLikes={`Total yang menyukai :  ${food.totalLikes}👍`}
//         onSubmit={handleDelete}
//         loading={loading}
//       />
//     </FoodLayout>
//   );
// }
