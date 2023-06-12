import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./components/notes";
import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNotes(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Footer />
      <Note notes={notes} />
    </>
  );
};

export default App;
