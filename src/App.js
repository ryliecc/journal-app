import "./App.css";
import Badge from "./components/Badge";
import Button from "./components/Button";
import EntriesSection from "./components/EntriesSection";
import Entry from "./components/Entry";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IconButton from "./components/IconButton";
import Input from "./components/Input";
import Main from "./components/Main";
import Tab from "./components/Tab";
import TabBar from "./components/TabBar";
import Textarea from "./components/Textarea";
import StarSVG from "./components/StarSVG";

export default function App() {
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
              <Badge numberOfEntries="3" />
            </Tab>
            <Tab text="Favorites">
              <Badge numberOfEntries="1" />
            </Tab>
          </TabBar>
          <EntryList>
            <Entry
              date="Feb 27, 2028"
              title="That's life in the city"
              text="Aenean posuere elit mollis nibh maximus, in dictum nibh ultrices. Sed tincidunt sem orci, sed facilisis leo fringilla ac. Vivamus nec blandit tellus. Duis id mi ligula. Vivamus urna leo, congue non justo eget, iaculis mollis libero."
            >
              <IconButton>
                <StarSVG isFilled={true} />
              </IconButton>
            </Entry>
            <Entry
              date="Feb 27, 2028"
              title="That's life in the city"
              text="Aenean posuere elit mollis nibh maximus, in dictum nibh ultrices. Sed tincidunt sem orci, sed facilisis leo fringilla ac. Vivamus nec blandit tellus. Duis id mi ligula. Vivamus urna leo, congue non justo eget, iaculis mollis libero."
            >
              <IconButton>
                <StarSVG isFilled={false} />
              </IconButton>
            </Entry>
            <Entry
              date="Feb 27, 2028"
              title="That's life in the city"
              text="Aenean posuere elit mollis nibh maximus, in dictum nibh ultrices. Sed tincidunt sem orci, sed facilisis leo fringilla ac. Vivamus nec blandit tellus. Duis id mi ligula. Vivamus urna leo, congue non justo eget, iaculis mollis libero."
            >
              <IconButton>
                <StarSVG isFilled={false} />
              </IconButton>
            </Entry>
          </EntryList>
        </EntriesSection>
      </Main>
      <Footer text="Journal App - 2023" />
    </>
  );
}
