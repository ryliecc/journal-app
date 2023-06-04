import { useState } from "react";
import { uid } from "uid";
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
import Entry from "./components/Entry";

export default function App() {
  const [entries, setEntries] = useState([
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
      isFavorite: false,
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
      isFavorite: false,
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
      isFavorite: false,
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
      isFavorite: false,
    },
  ]);

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
    setEntries([newEntry, ...entries]);
    form.reset();
    form.motto.focus();
  }

  function handleToggleFavorite(favEntryId) {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === favEntryId) {
        return { ...entry, isFavorite: !entry.isFavorite };
      }
      return entry;
    });
    console.log("Updated entries:", updatedEntries);
    setEntries(updatedEntries);
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
          <TabBar>
            <Tab text="All Entries">
              <Badge isActive="true" numberOfEntries="3" />
            </Tab>
            <Tab text="Favorites">
              <Badge isActive="false" numberOfEntries="1" />
            </Tab>
          </TabBar>
          <EntryList>
            {entries.map((entry) => {
              return (
                <Entry
                  id={entry.id}
                  date={entry.date}
                  motto={entry.motto}
                  notes={entry.notes}
                >
                  <FavoriteButton
                    onClick={handleToggleFavorite}
                    isFavorite={entry.isFavorite}
                    entryId={entry.id}
                  />
                </Entry>
              );
            })}
          </EntryList>
        </EntriesSection>
      </Main>
      <Footer text="Journal App - 2023" />
    </>
  );
}
