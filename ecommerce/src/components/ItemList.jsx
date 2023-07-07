import Item from "./Item";



const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container">

        <div className="productos">
            
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList