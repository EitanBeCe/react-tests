import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

// Testing suite
describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
