const Header = (props) => {

    const activeItems = props.items.filter(item => item.active);
    const number = activeItems.length;

    return (
        <header>
            <h4>Wielkość zamówienia: {activeItems.length}</h4>
            <h4>Do zapłaty: {number ? `${number*10} zł` : `Nie kupujesz, to nie płacisz`}</h4>
        </header>
    )
}