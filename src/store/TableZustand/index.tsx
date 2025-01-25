import { ListProduct } from '../../interface/producto'
import { create } from 'zustand';
interface ProductoState {
    selectListProducto :ListProduct[];
    setSelectListProducto : (products : ListProduct[]) => void;
}
export const useProductoZustand = create<ProductoState>((set) => ({
    selectListProducto : [],
    setSelectListProducto:(products) => set({selectListProducto:products })
}));
