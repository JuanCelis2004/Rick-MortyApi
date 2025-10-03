"use client";

import CharacterCard from "@/componentes/cards";


export default function CharacterPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page) || 1;

  return <CharacterCard initialPage={page} />;
}