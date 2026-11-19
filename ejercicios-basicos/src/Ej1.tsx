

export function Producto(props: { nombre: string; precio: number; stock: number }) {
  const { nombre, precio, stock } = props;

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '200px' }}>
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <p>
        {stock === 0 ? (
          <span style={{ color: 'gray' }}>Sin stock</span>
        ) : (
          `Stock: ${stock} unidades`
        )}
      </p>
    </div>
  );
}