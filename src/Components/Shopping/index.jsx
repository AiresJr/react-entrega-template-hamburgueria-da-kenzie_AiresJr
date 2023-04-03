import { DivBox, DivButton, DivTitle, DivTitleSecondary, LiStyle, UlStyle } from "./shoppingStyle";

export const Shopping = ({ shoppingList, removeProductFromShopping }) => {
  return (
    <>
      {shoppingList.length > 0 ? (
        <>
          <DivTitle>
            <h2>Carrinho de Compras</h2>
          </DivTitle>
          <UlStyle>
            {shoppingList.map((product) => (
              <LiStyle key={product.id}>
                <img src={product.img} alt={product.name} />
                <DivBox>
                  <DivButton>
                    <h2>{product.name}</h2>
                    <button onClick={() => removeProductFromShopping(product.id)}>Remover</button>
                  </DivButton>
                  <nav>{product.category}</nav>
                </DivBox>
              </LiStyle>
            ))}
          </UlStyle>
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
