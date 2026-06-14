export const Spinner = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-50/50">
            <style>
                {`
                @keyframes flip-page {
                    0%, 15% { 
                        transform: rotateY(0deg); 
                        background-color: #ffffff;
                    }
                    50% { 
                        background-color: #f8fafc;
                        box-shadow: inset 10px 0 20px rgba(0,0,0,0.05);
                    }
                    85%, 100% { 
                        transform: rotateY(-180deg); 
                        opacity: 0; 
                    }
                }
                .book-container {
                    perspective: 600px;
                }
                .page {
                    transform-origin: left center;
                    transform-style: preserve-3d;
                }
                .page-1 { animation: flip-page 2s infinite ease-in-out; }
                .page-2 { animation: flip-page 2s infinite ease-in-out 0.25s; }
                .page-3 { animation: flip-page 2s infinite ease-in-out 0.5s; }
                .page-4 { animation: flip-page 2s infinite ease-in-out 0.75s; }
                .page-5 { animation: flip-page 2s infinite ease-in-out 1.0s; }
                `}
            </style>
            
            <div className="flex flex-col items-center gap-8">
                {/* Book Animation */}
                <div className="book-container relative w-36 h-24 bg-orange-500 rounded-md shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                    {/* Spine */}
                    <div className="absolute w-[3px] h-full bg-orange-800 opacity-20 z-10"></div>
                    
                    {/* Left Page (static) */}
                    <div className="absolute top-1.5 bottom-1.5 left-1.5 right-1/2 bg-slate-50 rounded-l-sm border-r border-slate-200"></div>
                    
                    {/* Right Page (static background) */}
                    <div className="absolute top-1.5 bottom-1.5 left-1/2 right-1.5 bg-slate-50 rounded-r-sm border-l border-slate-200"></div>
                    
                    {/* Flipping Pages */}
                    <div className="page page-5 absolute top-1.5 bottom-1.5 left-1/2 w-[calc(50%-6px)] bg-white rounded-r-sm shadow-[-2px_0_10px_rgba(0,0,0,0.05)] border-l border-slate-200"></div>
                    <div className="page page-4 absolute top-1.5 bottom-1.5 left-1/2 w-[calc(50%-6px)] bg-white rounded-r-sm shadow-[-2px_0_10px_rgba(0,0,0,0.05)] border-l border-slate-200"></div>
                    <div className="page page-3 absolute top-1.5 bottom-1.5 left-1/2 w-[calc(50%-6px)] bg-white rounded-r-sm shadow-[-2px_0_10px_rgba(0,0,0,0.05)] border-l border-slate-200"></div>
                    <div className="page page-2 absolute top-1.5 bottom-1.5 left-1/2 w-[calc(50%-6px)] bg-white rounded-r-sm shadow-[-2px_0_10px_rgba(0,0,0,0.05)] border-l border-slate-200"></div>
                    <div className="page page-1 absolute top-1.5 bottom-1.5 left-1/2 w-[calc(50%-6px)] bg-white rounded-r-sm shadow-[-2px_0_10px_rgba(0,0,0,0.05)] border-l border-slate-200"></div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-orange-600 font-bold text-lg animate-pulse tracking-wide">
                        Preparando seus estudos...
                    </h3>
                    <p className="text-slate-500 text-sm font-medium">
                        Organizando sua mesa
                    </p>
                </div>
            </div>
        </div>
    )
}