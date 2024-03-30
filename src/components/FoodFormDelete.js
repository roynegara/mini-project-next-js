// import { useState } from "react";

// export default function FoodFormDelete({ title, onDelete, loading }) {
//   const [showNotification, setShowNotification] = useState(false);

//   const handleDeleteFood = async () => {
//     await onDelete();
//     setShowNotification(true);
//     setTimeout(() => {
//       setShowNotification(false);
//     }, 3000); // Mengatur notifikasi untuk disembunyikan setelah 3 detik
//   };

//   return (
//     <form onSubmit={handleDeleteFood} className="grid w-1/2 justify-center gap-2">
//       <button type="submit" disabled={loading}>
//         {loading ? "Loading..." : title}
//       </button>
//       {showNotification && <div className="bg-green-500 text-white p-2 rounded">Food successfully deleted!</div>}
//     </form>
//   );
// }

export default function FoodFormDelete({ title, onDelete, loading }) {
  const handleDeleteFood = (e) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <form onSubmit={handleDeleteFood}>
      <button type="onSubmit">{loading ? "Loading..." : title}</button>
    </form>
  );
}
