export default function FoodForm(props) {
  const { title, defaultName, defaultUrlImage, onSubmit, loading } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("foodName");
    const imageUrl = formData.get("foodImg");

    onSubmit({ name, imageUrl, description: "     ", ingredients: [] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>{title}</h5>

      <label>Nama: </label>
      <input defaultValue={defaultName} name="foodName" placeholder="input food name" className="text-black" />

      <label>URL Gambar: </label>
      <input defaultValue={defaultUrlImage} name="foodImg" placeholder="url image" className="text-black" />

      <button type="submit" disabled={loading} className={`${loading ? "loading" : ""}`}>
        {title}
      </button>
    </form>
  );
}
