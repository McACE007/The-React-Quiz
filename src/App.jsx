import { useEffect, useReducer } from "react";
import "./App.css";
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action Unkown");
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;

  useEffect(() => {
    async function fetchQuestion() {
      try {
        const response = await fetch("http://localhost:3000/questions");
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (e) {
        console.error(e.message);
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestion();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status == "loading" && <Loader />}
        {status == "error" && <Error />}
        {console.log(status)}
        {status == "ready" && <StartScreen numQuestions={numQuestions} />}
      </Main>
    </div>
  );
}

export default App;
