import BackButton from "@/componentes/BackButton";
import { CharacterDetailProps } from "@/interface/interface";
import { getCharacter } from "@/services/services";


export default async function CharacterDetail({params,searchParams,}: CharacterDetailProps & { searchParams?: { fromPage?: string } }) {
  const character = await getCharacter(params.id);
  
  const fallbackHref = `/character?page=${searchParams?.fromPage ?? 1}`;

  return (  
    <div className="p-6 flex flex-col items-center">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-72 object-cover"
        />
        <div className="p-5 text-black">
          <h1 className="text-2xl font-bold mb-2">{character.name}</h1>
          <p><span className="font-semibold">Estado: </span> {character.status}</p>
          <p><span className="font-semibold">Especie: </span> {character.species}</p>
          <p><span className="font-semibold">Género: </span> {character.gender}</p>
          <p><span className="font-semibold">Origen: </span> {character.origin?.name}</p>
          <p><span className="font-semibold">Ubicación: </span> {character.location?.name}</p>
        </div>
      </div>

      <BackButton fallbackHref={fallbackHref} />
    </div>
  );
}
