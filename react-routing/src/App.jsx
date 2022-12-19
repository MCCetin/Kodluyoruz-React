import { Link, Route, Routes } from "react-router-dom";
import Book from "./components/Book";
import BookLayout from "./components/BookLayout";
import BookList from "./components/BookList";
import Home from "./components/Home";
import NewBook from "./components/NewBook";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/books">Book List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="newbook" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
