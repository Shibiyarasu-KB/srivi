import { useEffect, useState } from 'react';

export default function Gallery(){

    const [title,setTitle]=useState([]);

        useEffect(()=>{
            fetch('http://localhost:5000/videos')
            .then(res=>res.json())
            .then(data=>{setTitle(data)})
        },[]);
    return(
        <>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {title.map(item=>(
            <p className="border-2 border-yellow-500 p-4 my-4 max-w-lg mx-auto rounded-xl shadow-lg" key={item.id}>
                <a href={item.ref} target="_blank" rel="noreferrer">
                            <img 
                                src={`https://img.youtube.com/vi/${item.thumb}/hqdefault.jpg`} 
                                alt="Click to watch" 
                                className="w-full h-auto hover:opacity-90 transition-opacity cursor-pointer"
                            />
                        </a>
                <span className="block text-center font-bold text-lg py-4">{item.title}</span>
            </p>
        ))}
        </div>
        </div>
        </>
    )
}