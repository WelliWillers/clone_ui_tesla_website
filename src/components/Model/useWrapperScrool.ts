import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

import { useMotionValue } from "framer-motion";

export default function useWrapperScrool(){

    const { wrapperRef } = useContext(ModelsContext)

    const scroolY = useMotionValue(0);
    const scroolYProgress = useMotionValue(0);


    useEffect(() =>{
        const element = wrapperRef.current;

        if(element){
            const updateScrollValue = () => {
                if(element){
                    const { scrollTop, scrollHeight, offsetHeight } = element;
                    const fullscreen =  scrollHeight - offsetHeight;

                    scroolY.set(scrollTop) // quantidade de px que o user esta scrollando
                    scroolYProgress.set(scrollTop / fullscreen)// o tanto que scrollou
                }
            }
            element.addEventListener("scroll", updateScrollValue);
            return () => element?.removeEventListener("scroll", updateScrollValue);
        }
    }, [scroolY, scroolYProgress, wrapperRef])

    return { scroolY, scroolYProgress}; 
}