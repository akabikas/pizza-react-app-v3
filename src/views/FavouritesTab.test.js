import { render, screen }from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavouritesTab from "./FavouritesTab";


describe("FavouritesTab", () => {

  test("Removes from Favorites button", () => {
    const { getByText } = render(< FavouritesTab/>);
    const isFavorite = screen.getByText("Remove from Favorites");
    userEvent.click(isFavorite);
    expect({name, price}).toBeInvisible();
  });
  
  test("Add to Favorites button", () => {
   const { getByText } = render(<FavouritesTab />);
   const isFavorite = screen.getByText("Add to Favourites");
   userEvent.click(isFavorite);
   expect({ name, price }).Favouritestabs();
  });

  test("display name veriable in Favourites Table", () => {
    const { getByText } = render(< FavouritesTab/>);
    const Favouritestabs = screen.getByText("Name");
    expect({name}).toBeVisible();
  });
  
  test("display name veriable in Favourites Table", () => {
    const { getByText } = render(< FavouritesTab/>);
    const Favouritestabs = screen.getByText("Price");
    expect({price}).toBeVisible();
  });
  
});