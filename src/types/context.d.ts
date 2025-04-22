export // Define filter options
type FilterOptions = {
  hd: boolean;
  age: string;
  language: string;
  country: string;
  genre: string;
  contentType: "All" | "Movie" | "Series";
};