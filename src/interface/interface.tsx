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