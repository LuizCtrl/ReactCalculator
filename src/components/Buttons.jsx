const Button = ({label = 'undefined', changeDisplay}) => {
    return (
        <button 
            className={`p-4 rounded-lg bg-slate-950 hover:bg-slate-900 
                ${label === 'EQUALS' ? 'col-span-2' : ''}`} onClick={() => changeDisplay(label)}
        >
            {label}
        </button>
    )
}

export default Button;