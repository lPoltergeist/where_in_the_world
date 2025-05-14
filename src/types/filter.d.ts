export interface FilterProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    selectRegion: string;
    setSelectRegion: React.Dispatch<React.SetStateAction<string>>;
}