export default function FoodForm({
  title,
  defaultNama,
  defaultUrlGambar,
  defaultDeskripsi,
  onSubmit,
  defaultIngredients,
  loading,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("namaMakanan");
    const imageUrl = formData.get("gambarMakanan");
    const description = formData.get("deskripsiMakanan");
    const ingredients = formData
      .get("ingredients")
      .split(", ")
      .map((ingredient) => ingredient.trim());

    onSubmit({ name, imageUrl, description, ingredients });
  };

  return (
    <form onSubmit={handleSubmit} className="grid w-1/2 justify-center gap-2">
      <h5 className="text-xl text-center font-bold">{title}</h5>

      <label>Nama:</label>
      <input defaultValue={defaultNama} name="namaMakanan" className="text-black" placeholder="nama makanan" />

      <label>URL Gambar:</label>
      <input defaultValue={defaultUrlGambar} name="gambarMakanan" className="text-black" placeholder="url gambar" />

      <label>Deskripsi:</label>
      <input
        defaultValue={defaultDeskripsi}
        name="deskripsiMakanan"
        className="text-black"
        placeholder="deskripsi makanan"
      />

      <label>Ingedients:</label>
      <input
        defaultValue={defaultIngredients}
        name="ingredients"
        className="text-black"
        placeholder="ingredients pakai (,) koma"></input>

      <button
        type="submit"
        disabled={loading}
        className={`${loading ? "bg-gray-500" : "bg-blue-500"} p-1 rounded-full`}>
        {title}
      </button>
    </form>
  );
}

// export default function FoodForm(props) {
//   const {
//     title,
//     titleDelete,
//     detailDescription,
//     detailIngredients,
//     detailRating,
//     detailLikes,
//     defaultName,
//     defaultUrlImage,
//     defaultDescription,
//     defaultIngredients,
//     onSubmit,
//     // onDelete,
//     loading,
//   } = props;

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);
//     const name = formData.get("foodName");
//     const imageUrl = formData.get("foodImg");
//     const description = formData.get("foodDescription");
//     const ingredients = formData
//       .get("foodIngredients")
//       .split(", ")
//       .map((ingredient) => ingredient.trim());

//     onSubmit({ name, imageUrl, description, ingredients });

//     // onDelete();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h5>{title}</h5>
//       <h5>{titleDelete}</h5>
//       <h5>{detailDescription}</h5>
//       <h5>{detailIngredients}</h5>
//       <h5>{detailRating}</h5>
//       <h5>{detailLikes}</h5>

//       <label>Name : </label>
//       <input defaultValue={defaultName} name="foodName" placeholder="input food name" className="text-black" />

//       <label>URL Image: </label>
//       <input defaultValue={defaultUrlImage} name="foodImg" placeholder="url image" className="text-black" />

//       <label>Description: </label>
//       <input
//         defaultValue={defaultDescription}
//         name="foodDescription"
//         placeholder="description"
//         className="text-black"
//       />

//       <label>Ingredients: </label>
//       <input
//         defaultValue={defaultIngredients}
//         name="foodIngredients"
//         placeholder="gunakan (,) koma"
//         className="text-black"
//       />

//       <button
//         defaultValue={onSubmit}
//         type="submit"
//         disabled={loading}
//         className={`${loading ? "bg-gray-500" : "bg-blue-500"} p-1 rounded-full`}>
//         {loading ? "Loading..." : title}
//       </button>

//       {/* <button
//         defaultValue={onDelete}
//         type="submit"
//         disabled={loading}
//         className={`${loading ? "bg-gray-500" : "bg-blue-500"} p-1 rounded-full`}>
//         {loading ? "Loading..." : titleDelete}
//       </button> */}
//     </form>
//   );
// }
