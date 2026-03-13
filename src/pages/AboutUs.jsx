import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import abtcont from "../Events.json";
import { Auth } from "../auth";

export default function AboutUs() {

  const navigate = useNavigate();

    useEffect(() => {
        Auth(navigate); 
    }, [navigate]);

  const cont=abtcont.AboutUs || [];

  return (
    <div className="min-h-screen bg-center bg-cover bg-fixed py-10">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="p-16 text-lg tracking-wide leading-relaxed text-justify">{cont[0]?.content}</p>
      </div>
    </div>
  )
}

