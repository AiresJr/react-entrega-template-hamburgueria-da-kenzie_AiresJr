import { DivBox, DivButton, DivTitle, DivTitleSecondary, ListStyle, CardStyle } from "./shoppingStyle";

export const Shopping = ({ shoppingList, removeProductFromShopping }) => {
  return (
    <>
      {shoppingList.length > 0 ? (
        <>
          <DivTitle>
            <h2>Carrinho de Compras</h2>
          </DivTitle>
          <CardStyle>
            {shoppingList.map((product) => (
              <ListStyle key={product.id}>
                <img src={product.img} alt={product.name} />
                <DivBox>
                  <DivButton>
                    <h2>{product.name}</h2>
                    <button onClick={() => removeProductFromShopping(product.id)}>Remover</button>
                  </DivButton>
                  <nav>{product.category}</nav>
                </DivBox>
              </ListStyle>
            ))}
          </CardStyle>
        </>
      ) : (
        <DivTitleSecondary>
          <h2>Carrinho de Compras</h2>
          <div>
            <p>Sua sacola está vazia</p>
            <nav>Adicione itens</nav>
          </div>
        </DivTitleSecondary>
      )}
    </>
  );
};
