import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import SimpleBlog from "./SimpleBlog";

test("renders content", () => {
  const blog = {
    title: "Component testing is done with react-testing-library",
    author: "test",
    likes: 3
  };

  //   const component = render(<SimpleBlog blog={blog} />);

  //   expect(component.container).toHaveTextContent(
  //     "Component testing is done with react-testing-library"
  //   );
  //   expect(component.container).toHaveTextContent("test");
  //   expect(component.container).toHaveTextContent(3);

  const mockHandler = jest.fn();
  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  );
  const button = getByText("like");
  fireEvent.click(button);
  fireEvent.click(button);

  expect(mockHandler.mock.calls.length).toBe(1);
});
