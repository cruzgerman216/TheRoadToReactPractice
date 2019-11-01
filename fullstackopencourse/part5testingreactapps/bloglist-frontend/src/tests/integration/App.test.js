import React from "react";
import { render, waitForElement } from "@testing-library/react";
jest.mock("../../services/blogs");
import App from "../../App";

describe("<App />", () => {
  test("if no user logged, blogs are not rendered", async () => {
    const component = render(<App />);

    await waitForElement(() => component.getByText("login"));
    expect(component("username")).toBeInTheDocument();
    // expectations here
  });
});

// describe('App', () => {
//     test('not show blogs unless authenticated user', async () => {
//       const { queryByText } = render(<App />)

//       expect(queryByText('Login to Blog App')).toBeInTheDocument()
//       expect(queryByText('Blog')).not.toBeInTheDocument()
//     })
