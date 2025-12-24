import { useState , createContext, useEffect } from "react";
 



export const AppContext = createContext();

export default function AppContextProvider({children})
{
    const [loading , setLoading] = useState(false);
    const [darkMode , setDarkMode] = useState(false);
 
    const toggleDarkMode = ()=>{
        setDarkMode((prev)=> !prev)
    }

        

            useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        }, [darkMode]);


    const value = {
         loading ,
         setLoading,
         darkMode,
         setDarkMode,
         toggleDarkMode,
          
    };

    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
}

