import React, { useState, useEffect } from "react";
import { FiEdit, FiXSquare, FiCheckSquare, FiFolderPlus } from "react-icons/fi";

import "./Productos.css";

const Categorias = () => {
	const [data, setData] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);
	const [editingItemId, setEditingItemId] = useState(null);
	const [editFormData, setEditFormData] = useState({ nombre: "" });

	useEffect(() => {
		// Función para obtener los datos de la API
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:3000/api/v1/categorias"); // Reemplaza 'API_URL' con la URL de tu API
				const jsonData = await response.json();
				setData(jsonData);
				console.log(jsonData);
			} catch (error) {
				console.log("Error al obtener los datos:", error);
			}
		};

		fetchData();
	}, []);

	const handleSelectItem = (item) => {
		setSelectedItem(item);
	};

	const handleDeleteItem = async (itemId) => {
		try {
			// Realizar la solicitud de eliminación al servidor utilizando el ID del elemento
			await fetch(`http://localhost:3000/api/v1/categorias/${itemId}`, {
				method: "DELETE",
			});

			// Actualizar la lista de elementos eliminando el elemento correspondiente
			setData((prevData) => prevData.filter((item) => item.id !== itemId));

			// Limpiar el elemento seleccionado
			setSelectedItem(null);
		} catch (error) {
			console.log("Error al eliminar el elemento:", error);
		}
	};

	const fetchSingleItem = async (itemId) => {
		try {
			const response = await fetch(`http://localhost:3000/api/v1/categorias/${itemId}`);
			const itemData = await response.json();
			setEditFormData(itemData);
		} catch (error) {
			console.log("Error al obtener los datos del elemento:", error);
		}
	};

	const handleSaveChanges = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`http://localhost:3000/api/v1/categorias/${editingItemId}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(editFormData),
			});

			if (response.ok) {
				// Actualizar el estado de los elementos
				const updatedData = data.map((item) => {
					if (item.id === editingItemId) {
						return {
							...item,
							...editFormData,
						};
					}
					return item;
				});

				setData(updatedData);
				setEditingItemId(null);
			}
		} catch (error) {
			console.log("Error al guardar los cambios:", error);
		}
	};

	const handleEditItem = (itemId) => {
		setEditingItemId(itemId);
		fetchSingleItem(itemId);
	};

	return (
		<div>
			<h4>Tabla de Elementos</h4>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.id} onClick={() => handleSelectItem(item)}>
							<td>{item.id}</td>
							<td>{item.nombre}</td>
							<td>
								<button onClick={() => handleEditItem(item.id)}>
									<FiEdit />
								</button>
							</td>
							<td>
								<button onClick={() => handleDeleteItem(item.id)}>
									<FiXSquare />
								</button>
							</td>
							<td>
								<button onClick={() => handleEditItem(item.id)}>
									<FiCheckSquare />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{selectedItem && (
				<div>
					<h2>Elemento seleccionado:</h2>
					<p>
						ID: {selectedItem.id} <br />
						Nombre: {selectedItem.nombre}
						<br />
					</p>
				</div>
			)}

			{editingItemId && (
				<div>
					<h2>Editar elemento:</h2>
					<form>
						{/* Campos del formulario */}
						Nombre:
						<input
							type="text"
							value={editFormData.nombre}
							placeholder={selectedItem.nombre}
							onChange={(e) => setEditFormData({ ...editFormData, nombre: e.target.value })}
						/>{" "}
						<br />
						<br />
						{/* Botón de guardar cambios */}
						<button type="submit" onClick={handleSaveChanges}>
							Guardar cambios
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Categorias;
