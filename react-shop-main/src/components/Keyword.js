import Products from "./Products";
import Header from "./Header";
import {useLocation} from "react-router-dom";


export default function Keyword() {
    let params = useLocation().pathname;
    let url = params.replace("/", '');

    return (
        <div>
            <Header />
            <Products url={url}/>
        </div>
    );
}