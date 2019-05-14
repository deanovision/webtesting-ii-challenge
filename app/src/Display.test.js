import React from "react";
import { render, fireEvent } from "react-testing-library";
import Display from "./Display";
import "react-testing-library/cleanup-after-each";

describe("<Display />", () => {
  it("should display strikes 0, 1, 2", () => {
    const { getByText } = render(<Display />);
    getByText(/strikes/i);
  });
  it("should display balls 0, 1, 2, 3", () => {
    const { getByText } = render(<Display />);
    getByText(/balls/i);
  });
});
