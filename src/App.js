import { useState } from "react";
import { uid } from "uid";
import Button from "./components/Button";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Main from "./components/Main";
import TabBar from "./components/TabBar";
import Textarea from "./components/Textarea";

export default function App() {
  const initialEntries = [
    {
      id: 1000,
      date: "May 31, 2023",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
      isFavorite: false,
    },
    {
      id: 999,
      date: "May 30, 2023",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
      isFavorite: false,
    },
    {
      id: 998,
      date: "May 26, 2023",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
      isFavorite: false,
    },
    {
      id: 997,
      date: "May 25, 2023",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
      isFavorite: false,
    },
  ];
  const [filter, setFilter] = useState("all");
  const [allEntries, setAllEntries] = useState(initialEntries);
  const favoriteEntries = allEntries.filter(
    (entry) => entry.isFavorite === true
  );

  function handleAddEntry(event) {
    event.preventDefault();
    const form = event.target;
    const newEntry = {
      id: uid(),
      date: "Jun 4, 2023",
      motto: form.elements.motto.value,
      notes: form.elements.notes.value,
      isFavorite: false,
    };
    setAllEntries([newEntry, ...allEntries]);
    form.reset();
    form.motto.focus();
  }

  function showAllEntries() {
    setFilter("all");
  }

  function showFavoriteEntries() {
    setFilter("favorite");
  }

  function showUpdatedEntries() {
    if (filter === "favorite") {
      return favoriteEntries;
    }
    return allEntries;
  }

  function handleToggleFavorite(favEntryId) {
    const updatedEntries = allEntries.map((entry) => {
      if (entry.id === favEntryId) {
        return { ...entry, isFavorite: !entry.isFavorite };
      }
      return entry;
    });
    setAllEntries(updatedEntries);
  }

  return (
    <>
      <Header title="Journal" />
      <Main>
        <EntryForm title="New Entry" onAddEntry={handleAddEntry}>
          <Input id="motto" labelText="Motto" type="text" />
          <Textarea id="notes" labelText="Notes" rowNumber="3" />
          <Button type="submit" text="Create" />
        </EntryForm>
        <EntriesSection>
          <TabBar
            numberOfAllEntries={allEntries.length}
            onShowAllEntries={showAllEntries}
            numberOfFavoriteEntries={favoriteEntries.length}
            onShowFavoriteEntries={showFavoriteEntries}
            filter={filter}
          />
          <EntryList
            entries={showUpdatedEntries()}
            onToggleFavorite={handleToggleFavorite}
          />
        </EntriesSection>
      </Main>
      <Footer text="Journal App - 2023" />
    </>
  );
}
