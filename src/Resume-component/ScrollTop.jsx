import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when path changes
    }, [pathname]);

    return null;
}
