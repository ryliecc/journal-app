import { useState } from "react";
import Badge from "./components/Badge";
import Button from "./components/Button";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FavoriteButton from "./components/FavoriteButton";
import Input from "./components/Input";
import Main from "./components/Main";
import Tab from "./components/Tab";
import TabBar from "./components/TabBar";
import Textarea from "./components/Textarea";

export default function App() {
  const [isFavorite, setFavorite] = useState(false);

  const entries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
    },
  ];

  function handleFavorite() {
    setFavorite(!isFavorite);
  }

  return (
    <>
      <Header title="Journal" />
      <Main>
        <EntryForm title="New Entry">
          <Input id="entry-form__motto" labelText="Motto" type="text" />
          <Textarea id="entry-form__notes" labelText="Notes" rowNumber="3" />
          <Button type="submit" text="Create" />
        </EntryForm>
        <EntriesSection>
          <TabBar>
            <Tab text="All Entries">
              <Badge isActive="true" numberOfEntries="3" />
            </Tab>
            <Tab text="Favorites">
              <Badge isActive="false" numberOfEntries="1" />
            </Tab>
          </TabBar>
          <EntryList entries={entries}>
            <FavoriteButton onClick={handleFavorite} isFavorite={isFavorite} />
          </EntryList>
        </EntriesSection>
      </Main>
      <Footer text="Journal App - 2023" />
    </>
  );
}
