import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputMask from "react-input-mask";
import "./ClientFormPage.css";

export function ClientFormPage() {

    const [client, setClient] = useState({ name: "", email: "", phone: "", cpf: "" });
    const params = useParams();

    async function load() {
        if (params.id != "novo") {
            const response = await fetch('http://localhost:3000/clientes/' + params.id);
            const data = await response.json();
            setClient(data);
        }
    }

    useEffect(() => {
        load();
    }, [])

    function onFieldChanged(event) {
        const key = event.target.name;
        let value = event.target.value;
        const data = { ...client, [key]: value };
        setClient(data);
    }

    async function submit() {
        if (!client.id) {
            const response = await fetch('http://localhost:3000/clientes', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(client)
            });
            if (response.status == 201) {
                const data = await response.json();
                setClient(data);
                alert("Cliente cadastrado com sucesso");
            }
        } else {
            const response = await fetch('http://localhost:3000/clientes/' + client.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(client)
            });
            if (response.status == 200 || response.status == 204) {
                alert("Cliente Atualizado com sucesso");
            }
        }
    }

    return (
        <div className="m-4 ">
            <h3>Formulário de tarefas</h3>
            <div className="d-flex flex-column mb-3">
                <label className="mb-1">Código</label>
                <input readOnly name="id" value={client.id || ""} 
                className="mb-2 rounded form-control border border-2" />

                <label className="mb-1 ">Nome</label>
                <input placeholder="Digite o nome completo..."
                    name="name"
                    value={client.name || ""}
                    onChange={onFieldChanged}
                    className="mb-2 rounded form-control border border-2"
                />

                <label className="mb-1 ">E-mail</label>
                <input
                    placeholder="exemple@gmail.com"
                    type="email"
                    name="email"
                    value={client.email || ""}
                    onChange={onFieldChanged}
                    className="mb-2 rounded form-control border border-2"
                />

                <label className="mb-1 ">Telefone</label>
                <InputMask
                    mask="(99) 99999-9999"
                    placeholder="(47) 99999-9999"
                    name="phone"
                    value={client.phone || ""}
                    onChange={onFieldChanged}
                    className="mb-2 rounded form-control border border-2"
                />

                <label className="mb-1 ">CPF</label>
                <InputMask
                    mask="999.999.999-99"
                    placeholder="000.000.000-00"
                    name="cpf"
                    value={client.cpf || ""}
                    onChange={onFieldChanged}
                    className="mb-2 rounded form-control border border-2"
                />

            </div>

            <div>
                <button onClick={submit}
                    className="btn btn-success px-5 py-2 border ">Salvar</button>
                <a href="/clientes" 
                className="btn ">Voltar</a>
            </div>
        </div>
    );
}