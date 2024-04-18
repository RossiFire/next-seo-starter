"use client";
import { useEffect, useState } from "react";

export const useHydration = () =>{
    const [isMounted, setIsMounded] = useState(false)

    useEffect(()=>{
        setIsMounded(true)
    }, [])


    return isMounted;
}