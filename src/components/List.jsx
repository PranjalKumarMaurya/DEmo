function Item(props) {
    return (
        <li>
            {props.name} {props.isPacked ? "✅" : "❌"}
        </li>
    )
}

export default function List() {
    return(
        <div>
            <h1>Here is your packing list!</h1>
            <ul>
                <Item 
                    name="Shirts"
                    isPacked={true}
                />    
                <Item 
                    name="Shirts"
                    isPacked={true}
                />    
                <Item 
                    name="Shirts"
                    isPacked={true}
                />    
                <Item 
                    name="Shirts"
                    isPacked={true}
                />    
            </ul>
        </div>
    )
}