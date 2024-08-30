import { render, screen } from "@testing-library/react";
import Header from '../Header'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import '@testing-library/jest-dom'


test("Should find the login button", () => {

    render(
        <BrowserRouter>
          <Provider store={appStore}>
          <Header />
          </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button");

    expect(loginBtn).toBeInTheDocument();

})