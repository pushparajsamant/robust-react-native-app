import React from "react";
import {fireEvent, render} from "@testing-library/react-native";
import Button from "../Button";
const mockHandlePress = jest.fn();
const mockTitle = 'Submit';
const mockTestID = 'submitButton';
describe("Button", () => {
    it("will show loading spinner when isLoading is true", () => {
        const { getByTestId } = render(<Button title={mockTitle} handlePress={mockHandlePress} testID={mockTestID} isLoading={true}/>);
        const spinner = getByTestId('spinner');
        expect(spinner).toBeDefined();
    })
    it("will not show loading spinner when isLoading is false", () => {
        const {queryByTestId} = render(<Button title={mockTitle} handlePress={mockHandlePress} testID={mockTestID} isLoading={false}/>);
        const spinner = queryByTestId('spinner');
        expect(spinner).toBeNull();
    });
    it("will call handlePress function when the button is pressed", () => {
        const {getByTestId} = render(<Button title={mockTitle} handlePress={mockHandlePress} testID={mockTestID} isLoading={false}/>);
        const button = getByTestId(mockTestID);
        fireEvent.press(button);
        expect(mockHandlePress).toBeCalled();
    })
    it("should display the title on the button", () => {
        const {getByText} = render(<Button title={mockTitle} handlePress={mockHandlePress} testID={mockTestID} isLoading={false}/>);
        const title = getByText(mockTitle);
        expect(title).toBeDefined();
    })
})
