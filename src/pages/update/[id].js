import FoodForm from "@/components/FoodForm";
import axios from "axios";
import usePost from "@/hooks/usePost";
import FoodLayout from "@/layout/FoodLayout";

export async function getServerSideProps(context) {
  //   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.query.id}`, {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", keyWord: "Dibimbing API key" },
  });
  return { props: { food: resp.data.data } };
}

export default function Home({ food }) {
  const { loading, post } = usePost();

  const handleUpdatedFood = async ({ name, imageUrl, description, ingredients }) => {
    post(`/update-food/${food.id}`, {
      name,
      imageUrl,
      description,
      ingredients,
    });
  };

  return (
    <FoodLayout>
      <img width={200} src={food?.imageUrl} alt={food.name} />
      <FoodForm
        title={`Update ${food.name}`}
        defaultName={food.name}
        defaultUrlImage={food.imageUrl}
        loading={loading}
        onSubmit={handleUpdatedFood}
      />      
    </FoodLayout>
  );
}
