import { useState } from "react";


function useDarkMode (initialState) {
    const [darkMode, setDarkMode] = useState(initialState);

        return [darkMode, setDarkMode];
    }

export default useDarkMode;