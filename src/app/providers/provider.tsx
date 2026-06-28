"use client"
import { Provider } from "react-redux"
import { store } from "../store/store"
import { useEffect } from "react"

export const Providers = ({children}: {children: React.ReactNode})=>{

    useEffect(() => {
        // Ignora erros globais e rejections causados por extensões do navegador (background.js, etc)
        // Isso previne que o Next.js mostre a tela preta de "Application error" quando uma extensão quebra
        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            if (
                event.reason && 
                (event.reason.message?.includes("window is not defined") || 
                 event.reason.stack?.includes("background.js") ||
                 event.reason.stack?.includes("content.js") ||
                 event.reason.stack?.includes("extension"))
            ) {
                event.preventDefault(); // Impede o Next.js de capturar e quebrar a tela
                console.warn("Ignored extension error:", event.reason);
            }
        };

        const handleError = (event: ErrorEvent) => {
            if (
                event.error &&
                (event.error.stack?.includes("background.js") ||
                 event.error.stack?.includes("content.js") ||
                 event.error.stack?.includes("extension"))
            ) {
                event.preventDefault();
                console.warn("Ignored extension error:", event.error);
            }
        };

        window.addEventListener("unhandledrejection", handleUnhandledRejection);
        window.addEventListener("error", handleError);

        return () => {
            window.removeEventListener("unhandledrejection", handleUnhandledRejection);
            window.removeEventListener("error", handleError);
        };
    }, []);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}