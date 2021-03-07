export default function TabButton({label}) {
    const action = province => {
        console.log(province);
    }
    return (
        <>
        <button onClick={() => action(label)}>{label}</button>
        <style jsx>{`
        button {
            background-color: var(--orange);
            border: none;
            cursor: pointer;
            color: var(--textColor); 
            font: inherit;
            letter-spacing: 1px;
            padding: 0.6em 0.8em;  
            border-radius: 4px; 
            margin: 0.2em;
            outline: red;
        }
        button:hover {
            background-color: red;
        }
        button:visited {
            background-color: red;
        }
        button:focus {
            background-color: red;
        }
        `}
        </style>
        </>
    )
}