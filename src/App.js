import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <EntryForm />
        <EntriesSection />
      </Main>
      <Footer />
    </>
  );
}
