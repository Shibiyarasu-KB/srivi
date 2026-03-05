//import { useEffect, useState } from 'react';
import YogaImages from '../YogaImages.json';

export function Home() {
    return (
        
        <div className="w-full min-h-screen bg-center bg-cover bg-fixed py-10 px-4 space-y-20">
            
            {YogaImages.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-center gap-10 md:even:flex-row-reverse">
                    <div className="md:w-1/2">
                        <p className="text-black-700 text-justify text-lg p-8">{item.cont}</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                            src={item.imgurl} 
                            alt="Yoga" 
                            className="w-96 h-80 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}