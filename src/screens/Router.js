import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from '../componentes/Home/ItemListContainer/ItemListContainer';
import Home from './Home/Home';
import ItemDetailContainer from '../componentes/Home/ItemDetailContainer/ItemDetailContainer';

const Router = ()=>{
    return(
        <BrowserRouter>
            <Home/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/category/:category" element={<ItemListContainer/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/category/:category/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="*" element={<ItemListContainer/>}></Route>
            </Routes>
        
        </BrowserRouter>
    )
};

export default Router