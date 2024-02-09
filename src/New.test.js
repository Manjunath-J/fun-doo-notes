import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Signin from "./contents/Signin";
import New from "./contents/New";

test("renders learn react link", () => {
  render(<New />);
  const linkElement = screen.getByText(/Fundoo/i);
  expect(linkElement).toBeInTheDocument();
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveAttribute("name", "user");
});



describe.skip('apiTestCases',()=>{ 
    test("input is present or not", () => {
        render(<New />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveAttribute("name", "user");
      });
      
      test('check value', ()=>{
          render(<New />)
          const inputElement = screen.getByRole("textbox");
          fireEvent.change(inputElement, {target:{value: "news"}})
          expect(inputElement.value).toBe("news");
      })
      
      test('button test', ()=>{
          render(<New />)
          const buttonEle = screen.getByRole("button");
          fireEvent.click(buttonEle)
          expect(screen.getByText("change")).toBeInTheDocument();
      })
}) 