import React from "react";
import {render} from "@testing-library/react-native";
import Onboarding from "../Onboarding";

jest.mock("../../components/AppIntro/AppIntroSlider", () => 'MockedAppIntroSlider' );

describe("Onboarding", () => {
   it("renders the component correctly", () => {
      const { getByTestId } = render(<Onboarding/>);
      const onboardingComponent = getByTestId("Onboarding");
      expect(onboardingComponent).toBeDefined();
   });
});

