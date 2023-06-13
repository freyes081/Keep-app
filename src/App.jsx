import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./components/notes";
import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setNotes(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        // auto catches network / connection error
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      { error && <div>{ error }</div> }
      {loading && <div className="loading"> Loading...</div>}
      <Footer />
      <Note notes={notes} />
    </>
  );
};

export default App;
