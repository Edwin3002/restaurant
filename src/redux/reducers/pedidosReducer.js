import { createSlice } from "@reduxjs/toolkit";
import { pedidosFood } from "../../data/pedidos";
const initialState = {
    pedidosItems: pedidosFood.slice(0, 4),
    cantidad: 0,
    total: 0,
    isLoading: true
}

const pedidosReducer = createSlice({
    name: 'pedi',
    initialState,
    reducers: {
        vaciarPedido: (state) => {
            state.pedidosItems = [];
        },
        agregarPedido: (state, action) => {
            const itemId = action.payload;
            console.log(action);
            console.log(itemId);
            console.log(state);
            // state.pedidosItems = state
        }, aumentarItem: (state, { payload }) => {
            const cartItem = state.pedidosItems.find((item) => item.id === payload.id);
            console.log(cartItem)
            // cartItem.amount = cartItem.amount + 1;
        },
        disminuirItem: (state, { payload }) => {
            const cartItem = state.pedidosItems.find((item) => item.id === payload.id);
            console.log(cartItem)
            console.log(pedidosFood)
            console.log(state)
            // cartItem.amount = cartItem.amount - 1;
        },
    },
});


export const { vaciarPedido, aumentarItem, disminuirItem, agregarPedido } = pedidosReducer.actions
export default pedidosReducer.reducer