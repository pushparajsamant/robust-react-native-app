import '@testing-library/jest-native/extend-expect';
// Mocking the useNavigation hook
jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
}));
jest.mock('react-native-svg', () => ({
    SvgUri: 'SvgUri',
}));
module.exports = 'SvgMock';
module.exports.ReactComponent = 'SvgMock';
