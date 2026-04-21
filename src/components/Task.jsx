function Task({t}){
    function handleDone(){
        t.id
    }
    return (
        <div className="flex justify-between items-center border border-gray-300 bg-purple-50 rounded-md p-2 mb-2">
            <div>{t?.taskName}</div>
            <button onClick={handleDone} className="bg-green-500 text-white p-1 rounded-md mt-2">D</button>
        </div>
    )
}

export default Task