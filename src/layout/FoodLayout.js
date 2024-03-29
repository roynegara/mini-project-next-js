import Navbar from "@/components/Navbar"

export default function FoodLayout({ children }) {
    
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}