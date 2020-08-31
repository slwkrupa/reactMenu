const Item = (props) => {
    return(
        <li style={props.active ? { fontWeight: 'bold' } : { color: 'gray' }} onClick={() => props.changeStatus(props.id)}>
            {props.name} - {props.price}zł
        </li>
    )
}