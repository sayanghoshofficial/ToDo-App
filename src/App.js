import TodoApp from "./components/TodoApp";
import CustomItemProvider from "./context/context";


function App() {
  return (
    <>
      <CustomItemProvider>
        <TodoApp />
      </CustomItemProvider>

    </>
  );
}

export default App;
