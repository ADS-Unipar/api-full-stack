import { useState } from "react";
import api from "../utils/api";
import { useCallback } from "react";


function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

        const getTasks = useCallback(async () => {
            try {
                const {data} = await api.get('/tasks');
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', {error});
            } finally {
                setLoading(false);
            }
        }, []);

        const searchTasks = useCallback(async (query) => {
            try {
                const {data} = await api.get(`/tasks?search=${query}`);
                setTasks(data);
            } catch (error) {
                console.error('Error searching tasks:', {error});
            }
        }, []);

        const createTask = useCallback(async (task) => {
            try {
                const {data} = await api.post('/tasks', task);
                setTasks((prevTasks) => [...prevTasks, data]);
            } catch (error) {
                console.error('Error creating task:', {error});
            }
        }, []); 

        const updateTask = useCallback(async (id, updatedTask) => {
            try {
                const {data} = await api.put(`/tasks/${id}`, updatedTask);
                setTasks((prevTasks) =>
                    prevTasks.map((task) => (task.id === id ? data : task))
                );
            } catch (error) {
                console.error('Error updating task:', {error});
            }
        }, []);

        const deleteTask  = useCallback(async (id) => {
            try {
                await api.delete(`/tasks/${id}`);
                setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
            } catch (error) {
                console.error('Error deleting task:', {error});
            }
        }, []);

        const changeTaskStatus = useCallback(async (id, status) => {
            try {
                const response = await api.patch(`/tasks/${id}/status`, { status });
                const data = response.data;
                setTasks((prevTasks) =>
                    prevTasks.map((task) => (task.id === id ? data : task))
                );
            } catch (error) {
                console.error('Error changing task status:', {error});
            }
        }, []);

        return { tasks, getTasks, searchTasks, createTask, updateTask, deleteTask, changeTaskStatus, loading };  
    }
    export default useTasks;