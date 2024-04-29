export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center  sm:pt-0 bg-slate-900 dark:bg-gray-900">
            <div className="flex flex-col justify-center px-6 py-12 lg:px-8 bg-stone-100 dark:bg-gray-800 shadow-md overflow-hidden rounded-lg">
                {children}
            </div>
        </div>
    );
}
