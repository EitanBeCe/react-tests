import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // To replace real requests with dummy function (Mock)
    window.fetch = jest.fn();
    // Faking what will be the output of fetch
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    // If fetch worked we'll have li items
    // .getByRole will fail if we have more than 1 item
    // .getAllByRole returns an Array. But instantly, it will not wait
    // .find - return a promise. Waits for 1s by default (3d argument)
    const listItemElements = await screen.findAllByRole("listitem"); // Array
    expect(listItemElements).not.toHaveLength(0);
  });
});
