import { create } from 'zustand'

interface MenuState {
    isData: boolean;
    open : (value:boolean)=> void;
    close : (value:boolean)=> void;
    toggle:()=> void;
}

export const MenuZustand = create<MenuState>((set)=> ({
    isData : false,
    open : (value = true)=> set({isData: value}),
    close: (value = false)=> set({isData:value}),
    toggle :()=> set((state) => ({isData: !state.isData}))

}))


interface IconState {
    count:number;
    increment:()=>void;
    reset:()=>void;
}

export const StoreZustand = create<IconState>((set) => ({

    count:0,
    increment:() => set((state) => ({count: state.count + 1})),
    reset:() => set({count:0}),

}))