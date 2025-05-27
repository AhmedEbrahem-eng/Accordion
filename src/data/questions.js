export const questions = [
  // Basics
  {
    title: "What language is React based on?",
    text: "JavaScript",
    category: "basics"
  },
  {
    title: "What are the building blocks of React apps?",
    text: "Components",
    category: "basics"
  },
  {
    title: "What's the name of the syntax we use to describe a UI in React?",
    text: "JSX",
    category: "basics"
  },
  {
    title: "How to pass data from parent to child components?",
    text: "Props",
    category: "basics"
  },
  {
    title: "What is React.Fragment?",
    text: "A component that lets you group elements without adding extra nodes to the DOM",
    category: "basics"
  },
  {
    title: "What is the difference between props and state?",
    text: "Props are read-only and passed from parent to child, while state is mutable and managed within a component",
    category: "basics"
  },
  // Hooks
  {
    title: "What are React Hooks?",
    text: "Functions that allow using state and other React features in functional components",
    category: "hooks"
  },
  {
    title: "What is useState used for?",
    text: "To add state management to functional components",
    category: "hooks"
  },
  {
    title: "What is useEffect used for?",
    text: "To handle side effects in functional components, like data fetching, subscriptions, or DOM mutations",
    category: "hooks"
  },
  {
    title: "What is useContext used for?",
    text: "To subscribe to React context without introducing nesting",
    category: "hooks"
  },
  // Performance
  {
    title: "What is React.memo used for?",
    text: "To prevent unnecessary re-renders of functional components by memoizing the result",
    category: "performance"
  },
  {
    title: "What is useMemo used for?",
    text: "To memoize expensive computations so they are only recalculated when dependencies change",
    category: "performance"
  },
  {
    title: "What is useCallback used for?",
    text: "To memoize functions so they don't get recreated on every render",
    category: "performance"
  },
  // Routing
  {
    title: "What is React Router?",
    text: "A standard library for routing in React applications",
    category: "routing"
  },
  {
    title: "What is the useNavigate hook?",
    text: "A hook that returns a function to programmatically navigate between routes",
    category: "routing"
  },
  {
    title: "What are Route parameters?",
    text: "Dynamic segments in the URL that can be accessed using useParams hook",
    category: "routing"
  },
  // State Management
  {
    title: "What is Redux?",
    text: "A predictable state container for JavaScript apps, commonly used with React",
    category: "state-management"
  },
  {
    title: "What is Context API?",
    text: "React's built-in system for passing data through the component tree without passing props manually",
    category: "state-management"
  },
  {
    title: "What is Zustand?",
    text: "A small, fast, and scalable state management solution for React",
    category: "state-management"
  }
];
