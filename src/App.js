import { useState } from 'react';
function App() {
    const [work, setWork] = useState('');
    return (
        <div className="flex justify-center items-center border-red-500 h-screen gap-8">
            <input
                type="text"
                className="outline-none border border-blue-700 rounded-2xl px-4 py-2 w-[400px] pr-2 pt-1 pl-2 pb-1"
                value={work}
                onChange={(e) => setWork(e.target.value)}
            />
            <button
                type="button"
                className="outline-none border bg-blue-700 rounded-2xl w-[80px] h-[35px] text-teal-50 font-bold"
            >
                ADD
            </button>
        </div>
    );
}

export default App;
