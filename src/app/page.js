"use client";
import BotonConsulta from "@/components/BotonConsulta";

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly text-center w-auto">
    <BotonConsulta/>
    <a href="/src/app/prueba" className="mx-96 my-8 bg-red-500 p-3 rounded-xl transition-all hover:transition-all hover:bg-white hover:text-red-500">Ir a siguiente</a>
    </div>
  );
}
