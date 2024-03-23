import axios from "axios";

export async function getServerSideProps(context) {
   
//   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.query.id}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
  });
  return { props: { food: resp.data.data } };
}



export default function Home({ food }) {

   

  return (
    <div>
      <div>
              <h1>Nama Makanan : {food.name}</h1>
              <h1>Deskripsi Makanan : {food.description}</h1>
              <h1>Resep : {food.ingredients.join(" ")}</h1>
          <img width={200} src={food?.imageUrl} alt={food.name} />
        </div> 
        
      
    </div>
  );
}
