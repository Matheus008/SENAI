import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export function TaskListPage(){
    const navigate = useNavigate();

    let [tasks,setTasks] = useState([]);
    
    const lines = tasks.map((task)=>{
        return(
            <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.concluded? 'Concluida':'Em Andamento'} </td>
            </tr>
        )
    })

    function newForm(){
        navigate('/tarefas/nova');
    }

    useEffect(()=>{
        fetch('http://localhost:3000/api/tarefas')
        .then(response =>{
            return response.json();
        })
        .then(tasks=>{
            setTasks(tasks);
        })
        .catch((err)=>{
            console.log(err);
            alert('Temos um problema...');
        })
    },[])

    return (
        <div>
            <h1>Lista de Tarefas 123</h1>
            <button onClick={newForm}>Novo</button>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Título</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {lines}
                </tbody>
            </table>
        </div>
    )
}