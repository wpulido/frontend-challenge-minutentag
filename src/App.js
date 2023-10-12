import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { Grocery } from "./components/Grocery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";

import "./App.css";
import { Rating } from "./components/Rating";

export default function App() {
  const products = [
    {
      name: "Potatoes 🥔",
      votes: 0,
    },
    {
      name: "Garlic 🧄",
      votes: 0,
    },
    {
      name: "Apples 🍎",
      votes: 0,
    },
    {
      name: "Peaches 🍑",
      votes: 0,
    },
    {
      name: "Pineapples 🍍",
      votes: 0,
    },
  ];

  const links = ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/238/200/300", "https://picsum.photos/id/239/200/300", "https://picsum.photos/id/240/200/300", "https://picsum.photos/id/241/200/300", "https://picsum.photos/id/242/200/300"];

  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Grocery' test</h3>
      <Grocery products={products} />
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={links} />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <h3>'List Items For Navigation' test</h3>
      <ListItemsForNavigation />
      <h3>'Rating' test</h3>
      <Rating />
    </div>
  );
}
