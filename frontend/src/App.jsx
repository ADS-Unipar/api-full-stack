import { ToastContainer } from 'react-toastify';
import SearchBar from './components/SearchBar';
import useTasks from './hooks/useTasks';
import { useEffect } from 'react';
import Card from './components/Card';
import { useRef } from 'react';

function App() {
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const {tasks, getTasks, searchTasks, createTask, deleteTask, changeTaskStatus, loading} = useTasks();

  useEffect(() => {
    getTasks();
  }, [getTasks]);
  console.log('Tarefas carregadas:', tasks);
  return (
    <div className="min-h-screen bg-gray-100">
    <form className="flex flex-col items-center gap-2 p-4" onSubmit={(e) => { 
      e.preventDefault();
      const title = nameRef.current.value;
      const description = descRef.current.value;
      createTask({ title, description });
      nameRef.current.value = '';
      descRef.current.value = '';
      //
    }}>
      <input className="border border-gray-300 rounded p-2" ref={nameRef} name="title" placeholder="titulo" />
      <input className="border border-gray-300 rounded p-2" ref={descRef} name="description" placeholder="descrição" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Adicionar Tarefa
      </button>
    </form>
      <SearchBar onSearch={(query) => searchTasks(query)} />
        <section className="p-4 justify-around align-center flex flex-wrap gap-4  ">
          {loading ? (
            <p>Carregando tarefas...</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <Card
                  title={task.title}
                  description={task.description}
                  status={task.status}
                >
                  <div className="flex gap-2">
                    <button onClick={() => changeTaskStatus(task.id, 2)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      COmpletar
                    </button>
                
                    <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                      Excluir
                    </button>
                  </div>
                </Card>
              ))}
            </ul>
          )}
        </section>
      <ToastContainer />
    </div>
  ) 
}

export default App
