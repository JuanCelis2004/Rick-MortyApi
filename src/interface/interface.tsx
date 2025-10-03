export interface Character {
  id?: number;
  name: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: { name: string };
  image: string;
};

export interface PaginationProps {
  page: number;
  totalPages: number;
  PageChange: (page: number) => void;
}

export interface CharacterDetailProps {
  params: { id: string };
}

export interface BackButtonProps {
  fallbackHref: string;
}

export interface CharacterCardProps {
  initialPage?: number;
}