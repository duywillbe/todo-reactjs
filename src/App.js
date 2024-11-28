import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const [work, setWork] = useState('');
    const [todos, setTodos] = useState([]);
    const handDelete = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };
    const handleAdd = () => {
        if (
            todos?.some((item) => item.id === work?.replace(/\s/g, ''))
        ) {toast.warning('Cong viec da duoc them truoc do ')}
        //prettier-ignore
        else {
            setTodos((prev) => [prev, { id: work?.replace(/\s/g, ''), job: work }]);
            setWork('');
        }
    };
    console.log(todos);

    return (
        <div>
            <div className="flex flex-col justify-center items-center border-red-500 h-screen gap-8">
                <div className="flex gap-8">
                    <input
                        type="text"
                        className="outline-none border border-blue-700 rounded-2xl px-4 py-2 w-[400px] pr-2 pt-1 pl-2 pb-1"
                        value={work}
                        onChange={(e) => setWork(e.target.value)}
                    />
                    <button
                        type="button"
                        className="outline-none border bg-blue-700 rounded-2xl w-[80px] h-[35px] text-teal-50 font-bold"
                        onClick={handleAdd}
                    >
                        ADD
                    </button>
                </div>
                <div>
                    <h3>content:</h3>
                    <div>
                        <ul>
                            {todos?.map((item, index) => {
                                //prettier-ignore
                                return (
                                <li key={item.id} className='flex gap-10 items-center'> 
                                <span className='my-2'>{item.job}</span>
                                <span onClick={() => handDelete(item.id)} className='my-2 cursor-pointer p-2'>Xoa</span> </li>
                            )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <ToastContainer />
        </div>
    );
}

export default App;
