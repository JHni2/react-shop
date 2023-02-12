import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import styled from "styled-components";
import UserInfoContext from './components/UserInfoContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Keyword from "./components/Keyword";
import Details from "./components/Details";
import Cart from "./components/Cart";
import UserCartContext from "./components/UserCartContext";


function App() {

    return (
        <BrowserRouter>
            <UserInfoContext >
                <UserCartContext>
                    <S.Main>
                        <Routes>
                            <Route path="/" element={<MainApp />} />
                            <Route path="fashion" element={<Keyword />} />
                            <Route path="accessory" element={<Keyword />} />
                            <Route path="digital" element={<Keyword />} />
                            <Route path="details/:id" element={<Details />} />
                            <Route path="cart" element={<Cart />} />
                        </Routes>
                    </S.Main>
                </UserCartContext>
            </UserInfoContext>
        </BrowserRouter>
    );
}

function MainApp() {
    return (
        <>
            <Header />
            <Carousel />
            <Products />
        </>
    );
}

export default App;


const S = {};

S.Main = styled.div`
    background-color: ${props => props.theme.colors.bgColor};
  h1, p, span, svg {
    color: ${props => props.theme.colors.titleColor};
  }
  li {
    border: ${props => props.theme.colors.borderColor};
    color: ${props => props.theme.colors.titleColor};
  }
  li > div {
    background: ${props => props.theme.colors.listBgColor};
  }
  li > div > p {
    background: ${props => props.theme.colors.listBgColor};
    color: ${props => props.theme.colors.titleColor};
  }
  form > ul {
    background: ${props => props.theme.colors.searchBgColor};
  }

  form > ul > li {
    border: none;
  }
  
  form > ul > li:hover {
    background: ${props => props.theme.colors.searchHoverBgcolor};
  }
`