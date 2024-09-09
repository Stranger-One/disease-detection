import React from 'react'
import CategoryItem from './CategoryItem'

const Category = () => {

    const categoryItems = [
        {
            category: "Cereals & Grains",
            bgImage: "/category/Cereals & Grains.jpg"
        },
        {
            category: "Fruits",
            bgImage: "/category/Fruits.jpg"
        },
        {
            category: "Vegetables",
            bgImage: "/category/Vegetables.jpg"
        },
        {
            category: "Pulses & Legumes",
            bgImage: "/category/Pulses & Legumes.jpg"
        },
        {
            category: "Oilseeds",
            bgImage: "/category/Oilseeds.jpg"
        }
    ]
    return (
        <div className="py-10">
            <h2 className="text-2xl font-bold text-gray-900 text-center py-10">Crop Categories</h2>
            <div className="w-full grid grid-cols-5 px-5 gap-2">
                {categoryItems.map((item, index) => (
                    <CategoryItem key={index} category={item.category} bgImage={item.bgImage} />
                ))}
            </div>
        </div>
    )
}

export default Category