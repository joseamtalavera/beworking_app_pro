
// useAuth.js

import { useState, useEffect } from 'react';

function useAuth(autoCheck = true) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

       

    const checkAuth = async () => {
        if (!autoCheck) return;

        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/status`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if(data.isAuthenticated){
                    setIsAuthenticated(true);
                    setIsAdmin(data.isAdmin);
                } else {
                    console.log('User is not authenticated');
                    setIsAuthenticated(false);
                    setIsAdmin(false);
                }
                
            } else {
                console.log('Response is not ok');
                setIsAuthenticated(false);
                setIsAdmin(false);
            }
        } catch (error) {
            console.error('Fetch error:', error.message);
            setIsAuthenticated(false);
            setIsAdmin(false);
        } finally {
            setIsLoading(false);
        }
    };

    checkAuth();
}, [autoCheck]);

    return {isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin, isLoading};
}


export default useAuth;











/*  const checkAuth = async () => {
            if (autoCheck){
                setIsLoading(true);

                try{
                    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/status`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json', 
                        },
                        credentials: 'include',
                    });
                    if (response.ok){
                        const data = await response.json();
                        console.log(data);
                        setIsAuthenticated(true);
                        setIsAdmin(data.isAdmin);    
                    } else {
                        console.log('Response is not ok');
                        setIsAuthenticated(false);
                        setIsAdmin(false);  
                    }
                } catch (error) {
                    console.error('Fetch error:', error.message);
                    setIsAuthenticated(false);
                    setIsAdmin(false);  
                } finally {
                    setIsLoading(false);
                }
            }
        };
        checkAuth(); 
    }, [autoCheck]); */