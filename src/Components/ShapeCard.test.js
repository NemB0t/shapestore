import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShapeCard from "./ShapeCard";

describe("ShapeCard - Add item functionality",()=>{
    it('calls on add cart correct number of times', () => {
        const onClickMock = jest.fn();
        render(<ShapeCard  shape={{id:1,name:'hello',price: 30} } onAddItemChange = {onClickMock}/>);
        const btn = screen.getByTestId("addCartBtn");
        userEvent.click(btn);
        userEvent.click(btn);
        userEvent.click(btn);
        userEvent.click(btn);
        expect(onClickMock).toHaveBeenCalledTimes(4);
    });

    it('Calls on add cart with correct arguments', () => {
        const onClickMock = jest.fn();
        render(<ShapeCard  shape={{id:1,name:'hello',price: 30} } onAddItemChange = {onClickMock}/>);
        const addCartBtn = screen.getByTestId("addCartBtn");
        userEvent.click(addCartBtn);
        expect(onClickMock).toHaveBeenCalledWith({
            item:{id:1,
              name: 'hello',
              price: 30},
            count:1,
          })
    });

    it('Calls on add cart with correct arguments when plus is pressed', () => {
        const onClickMock = jest.fn();
        render(<ShapeCard  shape={{id:1,name:'hello',price: 30} } onAddItemChange = {onClickMock}/>);
        const addCartBtn = screen.getByTestId("addCartBtn");
        const plusBtn = screen.getByTestId("plusBtn");
        userEvent.click(plusBtn);
        userEvent.click(plusBtn);
        userEvent.click(addCartBtn);
        expect(onClickMock).toHaveBeenCalledWith({
            item:{id:1,
              name: 'hello',
              price: 30},
            count:3,
          })
    });

    it('Calls on add cart with correct arguments when trying for negative', () => {
        const onClickMock = jest.fn();
        render(<ShapeCard  shape={{id:1,name:'square',price: 30} } onAddItemChange = {onClickMock}/>);
        const addCartBtn = screen.getByTestId("addCartBtn");
        const minusBtn = screen.getByTestId("minusBtn");
        userEvent.click(minusBtn);
        userEvent.click(addCartBtn);
        expect(onClickMock).toHaveBeenCalledWith({
            item:{id:1,
              name: 'square',
              price: 30},
            count:1,
          })
    });
    
});

describe('ShapeCard - Remove item functionality', () => {
    it('calls on remove item correct number of times', () => {
        const onClickMock = jest.fn();
        render(<ShapeCard shape={{id:1,name:'square',price: 10*2}} rm={true} onRemoveItemChange={onClickMock}/>);
        const btn = screen.getByTestId("removeBtn");
        userEvent.click(btn);
        userEvent.click(btn);
        userEvent.click(btn);
        userEvent.click(btn);
        expect(onClickMock).toHaveBeenCalledTimes(4);
    });

    it('Calls on remove item with correct arguments', () => {
        const onClickMock = jest.fn();
        render(<ShapeCard shape={{id:3,name:'square',price: 10*2}} rm={true} onRemoveItemChange={onClickMock}/>);
        const btn = screen.getByTestId("removeBtn");
        userEvent.click(btn);
        expect(onClickMock).toHaveBeenCalledWith(3)
    });
    
});

