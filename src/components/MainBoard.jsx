import React, {  useState } from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { ToastContainer } from "react-toastify";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
import useFetchTodos from "../utils/Hooks/useFetchTodos";
import useEditTodos from "../utils/Hooks/useEditTodos";
import useAddTodos from "../utils/Hooks/useAddTodos";
import useDeleteTodo from "../utils/Hooks/useDeleteTodo";

const MainBoard = () => {
  const [todoId, setTodoId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [initialData, setInitialData] = useState({});

  const { todos } = useFetchTodos();
  const { Update } = useEditTodos();
  const { add } = useAddTodos();
  const { remove } = useDeleteTodo();



  const handleAddBoardClick = () => {
    setInitialData({});
    setIsOpen(true);
    setIsEditing(false);
  };

  const handleEditClick = (id) => {
    setTodoId(id);
    setIsOpen(true);
    setIsEditing(true);
    const selectedTodo = todos.find((todo) => todo._id === id);
    setInitialData(selectedTodo);
  };

  const onDelete = (id) => {
    remove(id); //id:todoId
  };

  const onSave = ({ title, description }) => {
    if (isEditing) {
      Update({ id: todoId, title, description });
    } else {
      add({ title, description });
    }
    setIsOpen(false);
    setIsEditing(false);
  };

  return (
    <>
      <div className="w-full h-auto bg- px-[4%] py-[0.7%] relative">
        <ToastContainer position="bottom-right" />
        <NavBar />
        <div className="h-[5%] w-[90%]   text-white mt-[1%] flex justify-between pr-[10%]">
          <span className="font-bold text-3xl text-black">Main Boards</span>
          <div>
            <button
              className="bg-[#314c9e] px-6 py-4 rounded-lg font-bold shadow-2xl hover:bg-gradient-to-r hover:from-orange-200  bg-gradient-to-br from-orange-100  "
              onClick={() => handleAddBoardClick()}
            >
              Add Board
            </button>
          </div>
        </div>
        <div className=" w-[45%] py-4 flex justify-between  text-[#476279]">
          <span>
            you have <span className="font-bold">{todos?.length}</span> tasks
            remaining
          </span>
          <span className="pr-2">
            sort by:
            <select className="font-bold ml-2">
              <option>oldest</option>
              <option>newest</option>
            </select>
          </span>
        </div>
        {!todos ? (
          <div className=" w-[100%] bg-gray-100 flex flex-wrap justify-start  px-2">
            {Array.from({ length: 8 }, (_, index) => (
              <Shimmer key={index} />
            ))}
          </div>
        ) : (
          <div className=" w-[100%] bg-green-50 flex flex-wrap justify-start  px-2">
            {todos &&
              todos?.map((todo) => (
                <Cards
                  key={todo._id}
                  id={todo._id}
                  title={todo.title}
                  description={todo.description}
                  onDelete={onDelete}
                  onEdit={handleEditClick}
                />
              ))}
          </div>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <TodoForm
          initialData={initialData}
          onClose={() => setIsOpen(false)}
          onSubmit={onSave}
          isEditing={isEditing}
        />
      </Modal>
    </>
  );
};

export default MainBoard;
