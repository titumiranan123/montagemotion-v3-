"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import AOSInit from '../component/Aosinit';
const queryClient = new QueryClient()
const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster />
            <AOSInit />
        </QueryClientProvider>
    );
};

export default Provider;