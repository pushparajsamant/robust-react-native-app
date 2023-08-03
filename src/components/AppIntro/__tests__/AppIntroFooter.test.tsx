import React from "react";
import {fireEvent, render} from "@testing-library/react-native";
import AppIntroFooter from "../AppIntroFooter";

const mockScreens = [
    {
        title: ['Welcome to ', 'READDIT'],
        img: 'image1',
        content: 'content1',
    },{
        title: ['Welcome to 2 ', 'READDIT'],
        img: 'image1',
        content: 'content1',
    },{
        title: ['Welcome to 3 ', 'READDIT'],
        img: 'image1',
        content: 'content1',
    },
];
const handleScrollTo = jest.fn();
const handleSignInButton = jest.fn();

describe("AppIntroFooter", () => {
    it("should show Login button on last page", () => {
        const sliderState = {
            currentPage: 2
        }
        const { getByTestId } = render(<AppIntroFooter sliderState={sliderState} width={100} appIntroScreensArray={mockScreens} handleScrollTo={() => {}} handleSignInButton={() => {}}/>);
        const loginButton = getByTestId("signIn");
        expect(loginButton).toBeTruthy();
    })
    it("should show Skip and Next button on non-last page", () => {
        const sliderState = {
            currentPage: 1
        }
        const { getByText } = render(<AppIntroFooter sliderState={sliderState} width={100} appIntroScreensArray={mockScreens} handleScrollTo={() => {}} handleSignInButton={() => {}}/>);
        const nextButton = getByText("Next");
        const skipButton = getByText("Skip");
        expect(nextButton).toBeTruthy();
        expect(skipButton).toBeTruthy();
    })
    it("should call the handleScrollto when the next button is clicked", () => {
        const sliderState = {
            currentPage: 1
        }
        const { getByText } = render(<AppIntroFooter sliderState={sliderState} width={100} appIntroScreensArray={mockScreens} handleScrollTo={handleScrollTo} handleSignInButton={handleSignInButton}/>);
        const skipButton = getByText("Skip");
        fireEvent.press(skipButton);
        expect(handleScrollTo).toHaveBeenCalledWith(mockScreens.length - 1);
    })
    it("should call the next when the next button is clicked", () => {
        const sliderState = {
            currentPage: 1
        }
        const { getByText } = render(<AppIntroFooter sliderState={sliderState} width={100} appIntroScreensArray={mockScreens} handleScrollTo={handleScrollTo} handleSignInButton={handleSignInButton}/>);
        const nextButton = getByText("Next");
        fireEvent.press(nextButton);
        expect(handleScrollTo).toHaveBeenCalledWith(2);
    })
    it("should call the handleSignIn method when the skip button is clicked", () => {
        const sliderState = {
            currentPage: 2
        }
        const { getByTestId } = render(<AppIntroFooter sliderState={sliderState} width={100} appIntroScreensArray={mockScreens} handleScrollTo={handleScrollTo} handleSignInButton={handleSignInButton}/>);
        const loginButton = getByTestId("signIn");
        fireEvent.press(loginButton);
        expect(handleSignInButton).toHaveBeenCalled();
    })
})
