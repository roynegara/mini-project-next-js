export default function FoodFormDelete({
  title, 
  onDelete,  
  loading,
}) {
  const handleDeleteFood = () => {
      
 onDelete();

  };

  return (
    <form onSubmit={handleDeleteFood} className="grid w-1/2 justify-center gap-2">
           <button
        type="submit"
        disabled={loading}
        className={`${loading ? "bg-gray-500" : "bg-blue-500"} p-1 rounded-full`}>
        {title}
      </button>
    </form>
  );
}
