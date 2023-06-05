import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// RESET SCROLL WHEN PATHNAME CHANGED
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }, [pathname]);

}

export default ScrollToTop;