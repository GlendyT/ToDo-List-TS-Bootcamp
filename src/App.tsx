import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-universe bg-cover bg-center bg-no-repeat flex flex-col ">
        <div className="flex-1">
          <ToDoList />
        </div>
        <div className="sticky bottom-0 ">
          <ToDoForm />
        </div>
      </div>
    </>
  );
}

export default App;
