import "./App.css";
import Accordian from "./components/Accordian";

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordianData: AccordionItem[] = [
  {
    id: 1,
    title: "What is Binary Search?",
    content:
      "Binary Search is a search algorithm that finds the position of a target value within a sorted array. It repeatedly divides the search interval in half.",
  },
  {
    id: 2,
    title: "Benefits of Learning DSA",
    content:
      "Data Structures and Algorithms improve problem-solving skills, optimize code performance, and are often key in technical interviews.",
  },
  {
    id: 3,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces, primarily used for single-page applications and managing the view layer of web applications.",
  },
  {
    id: 4,
    title: "Why Use TypeScript?",
    content:
      "TypeScript adds static typing to JavaScript, helping developers catch errors during development and improve code maintainability.",
  },
];

function App() {
  return (
    <>
      <h1>UI Components</h1>
      <Accordian accordianData={accordianData} />
    </>
  );
}

export default App;
