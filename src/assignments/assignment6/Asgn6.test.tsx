import {
    fireEvent,
    render,
    screen,
} from "@testing-library/react";

import { vi } from "vitest";

import Asgn6 from "./TodoQuery";

import { useQuery } from "@tanstack/react-query";

/* mock react query */

vi.mock("@tanstack/react-query", () => ({
    useQuery: vi.fn(),
}));

describe("Asgn6 Component", () => {
    test("shows loading state", () => {
        (useQuery as any).mockReturnValue({
            isLoading: true,
        });

        render(<Asgn6 />);

        expect(
            screen.getByText("Loading...")
        ).toBeInTheDocument();
    });

    test("shows error state", () => {
        (useQuery as any).mockReturnValue({
            isLoading: false,
            error: true,
        });

        render(<Asgn6 />);

        expect(
            screen.getByText(
                "Error while fetching data"
            )
        ).toBeInTheDocument();
    });

    test("renders todos correctly", () => {
        (useQuery as any).mockReturnValue({
            isLoading: false,

            error: false,

            data: {
                todos: [
                    {
                        id: 1,
                        title: "Learn React Query",
                        completed: true,
                    },

                    {
                        id: 2,
                        title: "Write Tests",
                        completed: false,
                    },
                ],
            },
        });

        render(<Asgn6 />);

        expect(
            screen.getByText(
                "Learn React Query"
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                "Write Tests"
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText("Done")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Pending")
        ).toBeInTheDocument();
    });

    test("updates search input", () => {
        (useQuery as any).mockReturnValue({
            isLoading: false,

            error: false,

            data: {
                todos: [],
            },
        });

        render(<Asgn6 />);

        const searchInput =
            screen.getByPlaceholderText(
                "search"
            );

        fireEvent.change(searchInput, {
            target: {
                value: "react",
            },
        });

        expect(searchInput).toHaveValue(
            "react"
        );
    });

    test("changes sort value", () => {
        (useQuery as any).mockReturnValue({
            isLoading: false,

            error: false,

            data: {
                todos: [],
            },
        });

        render(<Asgn6 />);

        const select =
            screen.getByRole("combobox");

        fireEvent.change(select, {
            target: {
                value: "desc",
            },
        });

        expect(select).toHaveValue(
            "desc"
        );
    });

    test("pagination buttons work", () => {
        (useQuery as any).mockReturnValue({
            isLoading: false,

            error: false,

            data: {
                todos: [],
            },
        });

        render(<Asgn6 />);

        const nextButton =
            screen.getByText("Next");

        fireEvent.click(nextButton);

        expect(
            screen.getByText("Page 2")
        ).toBeInTheDocument();
    });

    test("previous button disabled on first page", () => {
        (useQuery as any).mockReturnValue({
            isLoading: false,

            error: false,

            data: {
                todos: [],
            },
        });

        render(<Asgn6 />);

        expect(
            screen.getByText("Previous")
        ).toBeDisabled();
    });
});