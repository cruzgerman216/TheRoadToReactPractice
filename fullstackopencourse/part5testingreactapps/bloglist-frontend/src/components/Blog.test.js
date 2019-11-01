import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import SimpleBlog from "./SimpleBlog";
import Blog from "./Blog";
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

  //   const mockHandler = jest.fn();
  //   const { getByText } = render(
  //     <SimpleBlog blog={blog} onClick={mockHandler} />
  //   );
  //   const button = getByText("like");
  //   fireEvent.click(button);
  //   fireEvent.click(button);

  //   expect(mockHandler.mock.calls.length).toBe(2);
  // });

  // describe("<Togglable />", () => {
  //   let component;

  //   beforeEach(() => {
  //     component = render(
  //       <Togglable buttonLabel="show...">
  //         <div className="testDiv" />
  //       </Togglable>
  //     );
  //   });

  //   test("renders its children", () => {
  //     component.container.querySelector(".testDiv");
  //   });

  //   test("at start the children are not displayed", () => {
  //     const div = component.container.querySelector(".togglableContent");

  //     expect(div).toHaveStyle("display: none");
  //   });
});
// test("Check keys", () => {
//   const blog = {
//     title: "title",
//     author: "author",
//     url: "Url",
//     likes: 3,
//     user: {
//       username: 234
//     }
//   };

//   const { queryByText } = render(<Blog blog={blog} />);
//   expect(queryByText(/author/i)).toBeInTheDocument();
//   expect(queryByText(/title/i)).toBeInTheDocument();
//   expect(queryByText(/0 likes/i)).toBeInTheDocument();
//   fireEvent.click(getByText("like"));
//   fireEvent.click(getByText("like"));

//   expect(onClick).toBeCalledTimes(2);
// });
