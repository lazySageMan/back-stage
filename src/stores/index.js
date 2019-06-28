// reducer 根文件
import React from "react";
import productsReducer from './modules/header'
export default function() {
    const productsInitState = { products: [] }; // 初始化状态
    const [pState, pDispatch] = React.useReducer(productsReducer, productsInitState);
    const dispatchs = [pDispatch]
    const state = {
        pState
    }
    const dispatch = GetDispatch(dispatchs);

    const ContextStore = React.createContext({
        products: []
    });
    // 将ContextStore暴露到全局
    window.ContextStore = ContextStore;
    return (
        <ContextStore.Provider value={{
            ...state,
            dispatch
        }}></ContextStore.Provider>
    )
}
function GetDispatch(dispatchs) {
    return (obj) => {
        for (let i = 0; i < dispatchs.length; i++) {
            dispatchs[i](obj);
        }
    };
}






