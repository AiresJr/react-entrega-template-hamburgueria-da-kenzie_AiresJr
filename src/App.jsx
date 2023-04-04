import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { Products } from "./Components/Products";
import { Shopping } from "./Components/Shopping";
import { TotalShopping } from "./Components/TotalShopping";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global";
import { FlexBox, Left, MainStyle, Right } from "./styles/main";
import { toast } from 'react-toastify';


function App() {
  const shoppingListLocalStorage = localStorage.getItem("@SHOPPINGLIST");
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState(shoppingListLocalStorage ? JSON.parse(shoppingListLocalStorage) : []);
  const [search, setSearch] = useState("");

  const searchFiltred = products.filter(
    (product) => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase())
  );

  const addProductToShopping = (product) => {
    const newShoppingList = [...shoppingList, product];
    if (!shoppingList.some((products) => products.id === product.id)) {
      setShoppingList(newShoppingList);
      toast.success("Produto adicionado!", {autoClose: 1000})
    } else {
      toast.error("Esse produto ja existe!", {autoClose: 2000});
    }
  };

  const removeProductFromShopping = (productId) => {
    const newShoppingList = shoppingList.filter((product) => product.id !== productId);
    setShoppingList(newShoppingList);
    toast.success("Produto removido!", {autoClose: 1000});
  };

  const removeAllProductFromShopping = () => {
    setShoppingList([]);
    toast.success("Todos os produtos foram removidos!", {autoClose: 2000});
  };

  const loadProducts = async () => {
    try {
      const response = await api.get("products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("@SHOPPINGLIST", JSON.stringify(shoppingList));
  }, [shoppingList]);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header setSearch={setSearch} />
      <MainStyle>
        <FlexBox>
          <Left>
            <Products
              products={products}
              addProductToShopping={addProductToShopping}
              searchFiltred={searchFiltred}
              search={search}
              setSearch={setSearch}
            />
          </Left>
          <Right>
            <Shopping shoppingList={shoppingList} removeProductFromShopping={removeProductFromShopping} />
            <TotalShopping removeAllProductFromShopping={removeAllProductFromShopping} shoppingList={shoppingList} />
          </Right>
        </FlexBox>
      </MainStyle>
    </div>
  );
}

export default App;
