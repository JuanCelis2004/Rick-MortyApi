"use client"
import { Character, CharacterCardProps } from "@/interface/interface";
import { getCharacters } from "@/services/services";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "./pagination";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import LogoutButton from "./logout";
import useAuthStore from "@/store/useAuthStore";

export default function CharacterCard({ initialPage = 1 }: CharacterCardProps) {
    const isLogged = useAuthStore((state) => state.isLogged);
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || initialPage;

    const [page, setPage] = useState(currentPage);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if (!isLogged) {
            router.replace("/login");
        }
    }, [isLogged, router]);


    useEffect(() => {
        if (!isLogged) return;
        getCharacters(`character?page=${page}`).then((data) => {
            setCharacters(data.results);
            setTotalPages(data.info.pages);
        });
        router.push(`/character?page=${page}`);
    }, [page]);

    if (!isLogged) return null;

    return (
        <div className="p-6">
            <header>
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Personajes de Rick y Morty</h1>
                <LogoutButton />
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {characters.map((character) => (
                    <Link
                        key={character.id}
                        href={`/character/${character.id}?fromPage=${page}`}
                        className="cursor-pointer"
                    >
                        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition">
                            <Image
                                src={character.image}
                                alt={character.name}
                                width={200}
                                height={200}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-5 text-black">
                                <h2 className="text-xl font-bold mb-2">{character.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div>
                <Pagination page={page} totalPages={totalPages} PageChange={setPage} />
            </div>
        </div>
    );
}