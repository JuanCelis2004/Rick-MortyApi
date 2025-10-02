"use client"
import { Character } from "@/interface/interface";
import { getCharacters } from "@/services/services";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "./pagination";

export default function CharacterCard() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getCharacters(`character?page=${page}`).then((data) => {
            setCharacters(data.results);
            setTotalPages(data.info.pages);
        });
    }, [page]);


    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {characters.map((character) => (
                    <div
                        key={character.id}
                        className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                    >
                        <Image
                            src={character.image}
                            alt={character.name}
                            width={200}
                            height={200}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-5 text-black">
                            <h2 className="text-xl font-bold mb-2">{character.name}</h2>
                            <p>
                                <span className="font-semibold">Estado: </span> {character.status}
                            </p>
                            <p>
                                <span className="font-semibold">Especie: </span> {character.species}
                            </p>
                            <p>
                                <span className="font-semibold">Género: </span> {character.gender}
                            </p>
                            <p>
                                <span className="font-semibold">Origen: </span>{" "}
                                {character.origin?.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                 <Pagination page={page} totalPages={totalPages} PageChange={setPage} />
            </div>
        </div>
    );
}