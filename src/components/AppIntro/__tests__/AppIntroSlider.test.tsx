import {render} from "@testing-library/react-native";
import AppIntroSlider from "../AppIntroSlider";
describe('AppIntroSlider', () => {
    const appIntroScreensArray = [
        {
            title: ['Welcome to ', 'READDIT'],
            img: 'image1',
            content: 'Content 1',
        },
        {
            title: ['Create an English ', 'Reading HABIT'],
            img: 'image2',
            content: 'Content 2',
        },
    ];
    it('renders the component correctly', () => {
        const {getByTestId, getAllByTestId} = render(<AppIntroSlider appIntroScreensArray={appIntroScreensArray}/>);
        const appIntroSlider = getByTestId('appIntroSlider');
        const appIntroScreens = getAllByTestId('appIntroScreen');
        const appIntroFooter = getByTestId('appIntroFooter');

        expect(appIntroSlider).toBeDefined();
        expect(appIntroFooter).toBeDefined();
    })
    it('renders the correct number of appIntroScreens', () => {
        const { getAllByTestId } = render(<AppIntroSlider appIntroScreensArray={appIntroScreensArray} />);
        const appIntroScreens = getAllByTestId('appIntroScreen');
        expect(appIntroScreens.length).toBe(appIntroScreensArray.length);
    });
});
