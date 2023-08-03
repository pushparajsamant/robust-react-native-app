import React from "react";
import { render } from '@testing-library/react-native';
import AppIntroScreen from '../AppIntroScreen';
import {appIntroScreenType} from "../../../screens/Onboarding";

// Mock the image module
jest.mock('../../../assets/images/AppIntro/Habits.png', () => ({
    // Replace the module with a mocked value
    uri: 'mocked-image-uri',
  }));
describe("AppIntroScreen", () => {
   const mockScreen = {
       title: ['Title 1', 'Title 2'],
       img:  require('../../../assets/images/AppIntro/Habits.png'),
       content: 'Some content'
   }
   it("renders correctly all the props", () => {
        const {getByTestId, getByText} = render(<AppIntroScreen width={100} screen={mockScreen}/>);
        const titleElement1 = getByText('Title 1');
        const titleElement2 = getByText('Title 2');
        //const contentElement = getByText('Some content');
        const imageElement = getByTestId('appIntroImage');

        expect(titleElement1).toBeDefined();
        expect(titleElement2).toBeDefined();
        expect(imageElement).toBeDefined();
        expect(imageElement.props.source).toEqual(mockScreen.img);
   });

});
