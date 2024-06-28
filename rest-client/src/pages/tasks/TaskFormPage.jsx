import { useEffect, useState } from "react";
import "./TaskFormPage.css";
import { useParams } from "react-router-dom";

export function TaskFormPage() {

    const [task, setTask] = useState({ title: "", description: "", concluded: false });
    const params = useParams();

    async function load() {
        if (params.id != "nova") {
            const response = await fetch('http://localhost:3000/tarefas/' + params.id);
            const data = await response.json();
            setTask(data);
        }
    }

    useEffect(() => {
        load();
    }, [])

    function onFieldChanged(event) {
        const key = event.target.name;
        let value = event.target.value;
        if (key == 'concluded') {
            value = event.target.checked;
        }
        const data = { ...task, [key]: value };
        setTask(data);
    }

    async function submit() {
        if (!task.id) {
            const response = await fetch('http://localhost:3000/tarefas', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            });
            if (response.status == 201) {
                const data = await response.json();
                setTask(data);
                alert("Tarefa criada com sucesso");
            }
        } else {
            const response = await fetch('http://localhost:3000/tarefas/' + task.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            });
            if (response.status == 200 || response.status == 204) {
                alert("Tarefa Atualizada com sucesso");
            }
        }
    }

    return (
        <div>
            <h3>Formulário de tarefas</h3>
            <div className="task-form">
                <label>Código</label>
                <input readOnly name="id" value={task.id || ""} />
                <label>Título</label>
                <input placeholder="Digite o título aqui"
                    name="title"
                    value={task.title || ""}
                    onChange={onFieldChanged}
                />
                <label>Descrição</label>
                <textarea
                    name="description"
                    value={task.description || ""}
                    onChange={onFieldChanged}
                />
                <label>
                    <input type="checkbox"
                        name="concluded"
                        checked={task.concluded}
                        onChange={onFieldChanged}
                    />
                    Concluída
                </label>
                <button onClick={submit}>Salvar</button>
            </div>
        </div>
    );
}