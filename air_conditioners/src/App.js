import Booking from "./components/Booking/Booking";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Main from "./routes/Main/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Courses />
      <Booking />
    </div>
  );
}

export default App;
