import React from 'react'

const AnalyseReport = () => {

    const relatedImages = [
        "/image-placeholder.png",
        "/image-placeholder.png",
        "/image-placeholder.png",
        "/image-placeholder.png",
        "/image-placeholder.png",
    ]

    return (
        <div className='w-full p-10 flex flex-col gap-3 '>

            <div className="">
                <div className="w-full h-[350px] bg-slate-400 grid grid-cols-[350px_auto] gap-10 mb-4 rounded-t-lg overflow-hidden">
                    <div className="px-4 bg-contain bg-no-repeat bg-center shadowcss" style={{
                        backgroundImage: `url(/image-placeholder.png)`
                    }}></div>
                    <div className="px-4">
                        <h2 className="text-2xl font-bold mb-6 text-center underline">Analyse Report</h2>
                        <div className=" flex flex-col gap-1">
                            <h2 className='text-lg'><strong>Disease Name: </strong>Tomato Leaf Blight</h2>
                            <div className="">
                                <h2 className='text-lg'><strong>Symptoms: </strong></h2>
                                <ul className="list-disc ml-4 pl-4">
                                    <li className='text-lg'>Yellow spots appearing on older leaves.</li>
                                    <li className='text-lg'>Dark brown lesions on the stems and leaves.</li>
                                    <li className='text-lg'>Leaves curling and drying from the edges inward.</li>
                                </ul>
                            </div>
                            <h2 className='text-lg'><strong>Crop Affected: </strong>Tomato</h2>
                            <h2 className='text-lg'><strong>Report Date: </strong>2023-02-20</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-5 gap-4">
                    {relatedImages.map((image, index) => (
                        <div className="w-full h-[150px] bg-slate-400 rounded-b-lg bg-contain bg-no-repeat bg-center" style={{
                            backgroundImage: `url(${image})`
                        }}></div>
                    ))}

                </div>
            </div>

            {/* Cause */}
            <div className="w-full">
                <h2 className='text-2xl mb-4 font-bold'>Cause:</h2>
                <div className="ml-10">
                    <h2 className='text-lg font-semibold'>Primary Cause:</h2>
                    <ul className="list-disc ml-4 pl-4 text-lg">
                        <li>Aused by the fungus Alternaria solani. </li>
                    </ul>
                </div>
                <div className="ml-10">
                    <h2 className='text-lg font-semibold'>Environmental Factors:</h2>
                    <ul className="list-disc ml-4 pl-4 text-lg">
                        <li>Thrives in warm, wet conditions.</li>
                        <li>Overcrowding and poor air circulation among plants contribute to the spread.</li>
                    </ul>
                </div>
                <div className="ml-10">
                    <h2 className='text-lg font-semibold'>Weather Impact:</h2>
                    <ul className="list-disc ml-4 pl-4 text-lg">
                        <li>Recent high humidity and rainfall in the past week have contributed to the disease's development.</li>
                    </ul>
                </div>
            </div>

            {/* prevention */}
            <div className="w-full">
                <h2 className='text-2xl mb-4 font-bold'>Prevention:</h2>
                <div className="ml-10">
                    <h2 className='text-lg font-semibold'>Preventive Measures:</h2>
                    <ul className="list-disc ml-4 pl-4 text-lg">
                        <li>Rotate crops every season to prevent the build-up of fungal spores. </li>
                        <li>Avoid watering plants from overhead to keep the leaves dry. </li>
                        <li>Plant disease-resistant varieties. </li>
                        <li>Remove and destroy any infected plant debris after harvest. </li>
                    </ul>
                </div>
            </div>
            
            {/* Treatment */}
            <div className="w-full">
                <h2 className='text-2xl mb-4 font-bold'>Treatment:</h2>
                <div className="ml-10">
                    <h2 className='text-lg font-semibold'>Immediate Actions:</h2>
                    <ul className="list-disc ml-4 pl-4 text-lg">
                        <li>Remove and destroy all infected leaves and stems. </li>
                        <li>Avoid working in the garden when the plants are wet to prevent disease spread. </li>
                    </ul>
                </div>
                <div className="ml-10 py-4">
                    <h2 className='text-lg font-semibold'>Chemical Treatments:</h2>
                    <div className="flex gap-2 ">
                        <div className="w-[170px] h-[250px] bg-slate-400 grid gap-2 grid-rows-[120px_auto] rounded-lg p-2 ">
                            <div className="bg-cover bg-center bg-no-repeat" style={{
                                backgroundImage: `url(/image-placeholder.png)`
                            }}></div>
                            <div className="">
                                <h2 className='text-lg font-semibold'>Chlorothalonil</h2>
                                <h2>Rs. 70/-</h2>
                                <p className='line-clamp-2 text-sm'>Apply weekly during wet weather</p>
                            </div>
                        </div>
                        <div className="w-[170px] h-[250px] bg-slate-400 grid gap-2 grid-rows-[120px_auto] rounded-lg p-2 ">
                            <div className="bg-cover bg-center bg-no-repeat" style={{
                                backgroundImage: `url(/image-placeholder.png)`
                            }}></div>
                            <div className="">
                                <h2 className='text-lg font-semibold'>Chlorothalonil</h2>
                                <h2>Rs. 70/-</h2>
                                <p className='line-clamp-2 text-sm'>Apply weekly during wet weather</p>
                            </div>
                        </div>
                        <div className="w-[170px] h-[250px] bg-slate-400 grid gap-2 grid-rows-[120px_auto] rounded-lg p-2 ">
                            <div className="bg-cover bg-center bg-no-repeat" style={{
                                backgroundImage: `url(/image-placeholder.png)`
                            }}></div>
                            <div className="">
                                <h2 className='text-lg font-semibold'>Chlorothalonil</h2>
                                <h2>Rs. 70/-</h2>
                                <p className='line-clamp-2 text-sm'>Apply weekly during wet weather</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-10">
                    <h2 className='text-lg font-semibold'>Natural Remedies:</h2>
                    <ul className="list-disc ml-4 pl-4 text-lg">
                        <li>Mix 1 tablespoon of baking soda and 2 tablespoons of vegetable oil in 1 gallon of water, and spray on affected areas.</li>
                        <li>Increase air circulation by spacing plants and removing weeds.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default AnalyseReport