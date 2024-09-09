import React from 'react'

const CategoryItem = ({category, bgImage}) => {
  return (
    <div className="w-full h-44 bg-surface rounded-lg overflow-hidden bg-cover bg-center relative cursor-pointer" style={{
        backgroundImage: `url('${bgImage}')`
    }}>
        <div className="absolute bottom-0 w-full" style={{
            background: 'linear-gradient(transparent , #121412 85%)'
        }}>
            <h2 className="text-xl font-bold text-background text-center py-3">
                {category}
            </h2>
        </div>
    </div>
  )
}

export default CategoryItem