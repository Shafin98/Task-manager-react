function Task({t, doneFunction, deleteFunction}){
    function handleDone(){
        doneFunction(t.id)
    }

    function handleDelete(){
        deleteFunction(t.id);
    }

    return (
        <div className={`${t.status ? 'bg-green-200' : 'bg-red-200'} flex justify-between items-center border border-gray-300 bg-purple-50 rounded-md p-2 mb-2`}>
            <div className="text-lg font-semibold">{t?.taskName}</div>
            <div className="text-sm">{t?.taskDetails}</div>
            <div>
                <button onClick={handleDone} className="bg-green-500 text-white p-0.5 rounded-md mt-2">D</button>
                <button onClick={handleDelete} className="bg-red-500 text-white p-0.5 rounded-md mt-2">X</button>
            </div>   
        </div>
    )
}

export default Task