import CharacterCard from "@/componentes/cards";

export default async function CharacterPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  return <CharacterCard initialPage={page} />;
}
