export default function searchInput(){
    return (
        <form action="/search">
            <input type="text" placeholder="Que desea buscar?"/>
            <button type="submit">Buscar</button>
        </form>
    )
}