import {
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react";

import AddTodoForm from "./AddTodoForm";

import apiFetch from "./apiClient";

import { vi } from "vitest";

vi.mock("./apiClient", () => ({
    default: vi.fn(),
}));

describe("AddTodoForm", () => {
    test("renders form inputs", () => {
        render(<AddTodoForm />);

        expect(
            screen.getByPlaceholderText(
                "Enter Title"
            )
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", {
                name: "Add Todo",
            })
        ).toBeInTheDocument();
    });

    test("updates input fields", () => {
        render(<AddTodoForm />);

        const titleInput =
            screen.getByPlaceholderText(
                "Enter Title"
            );

        fireEvent.change(titleInput, {
            target: {
                value: "Learn Testing",
            },
        });

        expect(titleInput).toHaveValue(
            "Learn Testing"
        );
    });

    test("submits form successfully", async () => {
        (apiFetch as any).mockResolvedValue(
            {}
        );

        render(<AddTodoForm />);

        fireEvent.change(
            screen.getByPlaceholderText(
                "Enter Title"
            ),
            {
                target: {
                    value: "New Todo",
                },
            }
        );

        fireEvent.change(
            screen.getByDisplayValue(""),
            {
                target: {
                    value: "2026-05-14",
                },
            }
        );

        fireEvent.click(
            screen.getByText("Add Todo")
        );

        await waitFor(() => {
            expect(
                screen.getByText(
                    "Todo Created"
                )
            ).toBeInTheDocument();
        });

        expect(apiFetch).toHaveBeenCalledWith(
            "https://dummyjson.com/todos/add",
            {
                method: "POST",

                body: JSON.stringify({
                    title: "New Todo",
                    dueDate: "2026-05-14",
                }),
            }
        );
    });

    test("shows error message on API failure", async () => {
        (apiFetch as any).mockRejectedValue(
            new Error("API Error")
        );

        render(<AddTodoForm />);

        fireEvent.click(
            screen.getByText("Add Todo")
        );

        await waitFor(() => {
            expect(
                screen.getByText(
                    "Failed to create todo"
                )
            ).toBeInTheDocument();
        });
    });
});