import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from '../utils/RapidApi';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("New");

    useEffect(() => {
        const fetchAlldata = async (query) => {
            setLoading(true);
            try {
                const { contents } = await fetchData(`search/?q=${query}`);
                setData(contents);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAlldata(value);
    }, [value]);

    return (
        <AuthContext.Provider value={{ loading, data, value, setValue }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
