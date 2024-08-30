import { render , screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us page Test Case", () => {
    // Test Case - 1
test("Verify input should render inside Contact US Componant", () => {

    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);

});

// Test Case - 2
test("Verify button should render inside Contact US Componant", () => {

    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

});

// Test Case - 3
test("Verify heading should render inside Contact US Componant", () => {

    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

});
});