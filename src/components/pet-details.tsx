"use client"

import Image from "next/image"
import { usePetContext } from "@/lib/hooks";
import { Pet } from "@/lib/types";
import PetButton from "./pet-button";

export default function PetDetails() {
    const { selectedPet } = usePetContext();

    return (
        <section className="flex flex-col h-full w-full">
            {
                !selectedPet ? (
                    <EmptyView />
                ) : (
                    <>
                        <TopBar pet={selectedPet} />

                        <OtherInfo pet={selectedPet} />

                        <Notes pet={selectedPet} />
                    </>
                )
            }
        </section>
    )
}

type Props = {
    pet: Pet;
}

function TopBar({ pet }: Props) {
    return (
        <div className="flex items-center bg-white px-8 py-5 border-b border-light">
            <Image
                src={pet?.imageUrl || ""}
                alt="Pet Details"
                height={75}
                width={75}
                className="h-[75px] w-[75px] rounded-full object-cover"
            />
            <h2 className="text-3xl font-semibold leading-7 ml-5">
                {pet?.name}
            </h2>

            <div className="ml-auto space-x-2">
                <PetButton actionType="edit" >Edit</PetButton>
                <PetButton actionType="checkout" >Checkout</PetButton>
            </div>

        </div>
    )
}

function OtherInfo({ pet }: Props) {
    return (
        <div className="flex justify-around py-10 px-5 text-center">
            <div>
                <h3 className="text-[13px] font-medium uppercase text-zinc-700">Owner Name</h3>
                <p className="mt-1 text-lg text-zinc-800">{pet?.ownerName}</p>
            </div>
            <div>
                <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
                <p className="mt-1 text-lg text-zinc-800">{pet?.age}</p>
            </div>
        </div>
    )
}

function Notes({ pet }: Props) {
    return (
        <section className="bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light flex-1 shadow-md">
            {pet?.notes}
        </section>
    )
}

function EmptyView() {
    return (
        <p className="h-full flex items-center justify-center text-2xl font-medium">
            No Pet Selected
        </p>
    )
}