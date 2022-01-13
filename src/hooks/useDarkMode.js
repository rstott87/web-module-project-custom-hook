import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode (initialState) {

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialState);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

        return [darkMode, setDarkMode, toggleMode];
    }

export default useDarkMode;