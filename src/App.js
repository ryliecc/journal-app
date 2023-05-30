import "./App.css";
import Button from "./components/Button";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Main from "./components/Main";
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
        <EntriesSection />
      </Main>
      <Footer />
    </>
  );
}
