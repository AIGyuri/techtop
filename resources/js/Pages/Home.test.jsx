import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";


vi.mock("@inertiajs/react", () => ({
    Head: ({ children }) => <>{children}</>,
    Link: ({ children, ...props }) => (
        <a {...props} onClick={(e) => e.preventDefault()}>
            {children}
        </a>
    ),
}));

test("first screen test", () => {
    render(<Home />);
    const headElement = screen.getByRole("heading", {
        name: "Üdvözlünk a Webshopunkban!",
    });
    expect(headElement).toBeInTheDocument();
    const homeLinkElement = screen.getByRole("link", {
        name: /home/i,
    });
    expect(homeLinkElement).toBeInTheDocument();
    const aboutLinkElement = screen.getByRole("link", {
        name: /about/i,
    });
    expect(aboutLinkElement).toBeInTheDocument();
    const loginLinkElement = screen.getByRole("link", {
        name: /login/i,
    });
    expect(loginLinkElement).toBeInTheDocument();
    const registerLinkElement = screen.getByRole("link", {
        name: /register/i,
    });
    expect(registerLinkElement).toBeInTheDocument();
    const productLinkElement = screen.getByRole("link", {
        name: "Nézd meg a teljes választékot",
    });
    expect(productLinkElement).toBeInTheDocument();
});

test("navigation test", () => {
    render(<Home />);
    const loginLinkElement = screen.getByRole("link", {
        name: /login/i,
    });
    expect(loginLinkElement).toBeInTheDocument();
    expect(loginLinkElement).toHaveAttribute("href", "/login");
    const aboutLinkElement = screen.getByRole("link", { name: /about/i });
    expect(aboutLinkElement).toBeInTheDocument();
    expect(aboutLinkElement).toHaveAttribute("href", "/about");
});

test("Clicking the link navigates to the products page", async () => {
    render(<Home />);
    const productLinkElement = screen.getByRole("link", {
        name: /választékot/i,
    });
    expect(productLinkElement).toBeInTheDocument();
    expect(productLinkElement).toHaveAttribute("href", "/products");
    fireEvent.click(productLinkElement);
});
