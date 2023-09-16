import meteoriteData from 'public/meteoriteData.json'
export default function FilterInputs(props) {
    const { nameSearch,recSearch, setNameSearch,setRecSearch } = props

    // On change handler for text input for Name field
    function handleNameInput(e) {
        const newName = e.target.value;
        setNameSearch(newName);
    }

    // On change handlerfor text input for RecClass field
    function handleRecInput(e) {
        const newRec = e.target.value;
        setRecSearch(newRec);
    }

    return (
        <>
            <div className="InputSearches">
                <div className="flex flex-col w-40">
                    <input className="border border-slate-100 text-slate-100 bg-slate-700 p-1 focus:bg-slate-100 focus:text-slate-700 outline-slate-700" type="text" placeholder="Filter Name" onChange={handleNameInput} value={nameSearch} />
                    <input className="border border-slate-100 text-slate-100 bg-slate-700 p-1 my-1 focus:bg-slate-100 focus:text-slate-700 outline-slate-700" type="text" placeholder="Filter Composition" onChange={handleRecInput} value={recSearch} />
                </div>
            </div>
        </>
    )
}