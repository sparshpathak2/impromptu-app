"use client"
import { SessionProvider } from 'next-auth/react';
import { ReactNode, Suspense } from 'react';

interface ProviderProps {
    children: ReactNode;
    session: any; // Adjust the type according to your session object type
}

const Provider = ({ children, session }: ProviderProps) => {
    return (
        <SessionProvider session={session}>
            <Suspense>
                {children}
            </Suspense>
        </SessionProvider>
    )
}

export default Provider
