import "./App.css";
import Badge from "./components/Badge";
import Button from "./components/Button";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Main from "./components/Main";
import Tab from "./components/Tab";
import TabBar from "./components/TabBar";
import Textarea from "./components/Textarea";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <EntryForm>
          <Input />
          <Textarea />
          <Button type="submit" text="Submit" />
        </EntryForm>
        <EntriesSection>
          <TabBar>
            <Tab text="All Entries">
              <Badge />
            </Tab>
            <Tab text="Favorites">
              <Badge />
            </Tab>
          </TabBar>
          <EntryList />
        </EntriesSection>
      </Main>
      <Footer />
    </>
  );
}
