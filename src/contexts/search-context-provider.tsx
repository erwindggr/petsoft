"use client";

import { useState, createContext } from 'react';

type SearchContextProviderProps = {
    children: React.ReactNode;
};

type TSearchContext = {
    searchQuery: string;
    handleSearchChange: (query: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({ children }: SearchContextProviderProps) {
    //state
    const [searchQuery, setSearchQuery] = useState('');
    //derived state

    //eventt handlers / actions
    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <SearchContext.Provider value={{ searchQuery, handleSearchChange }}>
            {children}
        </SearchContext.Provider>
    );
}