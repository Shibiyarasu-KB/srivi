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
    <div className="w-full min-h-screen bg-center  bg-cover bg-fixed text-justify">
      <h1 className="text-4xl font-bold text-center py-10">About Us</h1>
      <p className="px-60 py-10 text-lg text-justify text-base/8 tracking-wider">{cont[0]?.content}</p>
    </div>
  )
}

