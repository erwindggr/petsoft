"use client";

import { useState, createContext } from 'react';
import { Pet } from '@/lib/types';

type PetContextProviderProps = {
    children: React.ReactNode;
    data: Pet[];
};

type TPetContext = {
    pets: Pet[];
    selectedPetId: string | null;
    selectedPet: Pet | undefined;
    numberOfPets: number;
    handleChangeSelectedPetId: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({ data, children }: PetContextProviderProps) {
    //state
    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    //derived state
    const selectedPet = pets.find(pet => pet.id === selectedPetId);
    const numberOfPets = pets.length;

    //eventt handlers / actions
    const handleChangeSelectedPetId = (id: string) => {
        setSelectedPetId(id);
    }

    return (
        <PetContext.Provider value={{ pets, selectedPetId, selectedPet, numberOfPets, handleChangeSelectedPetId }}>
            {children}
        </PetContext.Provider>
    );
}