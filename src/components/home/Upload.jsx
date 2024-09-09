import React, { useCallback, useState } from 'react'
import { IoCameraOutline } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";

import { useDropzone } from 'react-dropzone'
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate()
    const [file, setFile] = useState([])
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
        setFile(acceptedFiles);
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const handleAnalyse = () => {
        navigate('report')
    };

    return (
        <div className='w-full h-full rounded-lg p-10'>
            <div className="w-full h-full grid grid-cols-2 grid-rows-[90%_10%] gap-4 p-10 ">
                <div className="shadowcss p-6 rounded-lg grid grid-rows-[70%_20%] content-between  ">
                    <div className=" p-4 rounded-lg border-dashed border-2 border-text1 flex items-center justify-center text-center cursor-pointer" {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <LuPlusCircle className='text-3xl' />
                                    <p>Drag and drop crop image here, <br /> or click to select files</p>
                                </div>
                        }
                    </div>
                    <div className=" rounded-lg w-full ">
                        <button className='text-lg flex whitespace-nowrap gap-2 items-center px-10 py-[10px] bg-primary hover:bg-primary/90 rounded-lg text-background font-semibold flex-shrink-0 mx-auto'><IoCameraOutline className='text-2xl' /> Take Picture</button>
                    </div>
                </div>
                <div className="shadowcss p-4 rounded-lg">
                    {file.length > 0 ? file.map((file, index)=>(
                        <img key={index} src={URL.createObjectURL(file)} alt="" className='w-full h-full object-contain ' />
                    )) : 
                    <img src="/image-placeholder.png" alt="" className='w-full h-full object-contain' />
                    }
                </div>
                <div className="col-span-full  flex justify-end rounded-lg">
                <button disabled={ file.length > 0 ? false : true} onClick={handleAnalyse} className='text-lg flex whitespace-nowrap gap-2 items-center px-10 py-2 bg-secondary hover:bg-secondary/90 rounded-lg text-text1 font-semibold shadowcss cursor-pointer'> Analyse</button>
                </div>
            </div>
        </div>
    )
}

export default Upload