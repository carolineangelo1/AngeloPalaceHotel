'use client';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import RoomCardList from './RoomCardList';

export default function Rooms() {
    const [filters, setFilters] = useState({
        people: '',
        price: '',
        type: '',
        beds: '',
    });

    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Load rooms from a JSON file
        fetch('/rooms.json')
            .then((response) => response.json())
            .then((data) => {
                setRooms(data);
                setFilteredRooms(data); // Initialize filteredRooms with all rooms
            })
            .catch((error) => console.error('Error loading rooms:', error));
    }, []);

    useEffect(() => {
        // Filter rooms whenever filters change
        const filtered = rooms.filter((room) => {
            const matchesPeople = filters.people ? room.people >= parseInt(filters.people) : true;
            const matchesPrice = filters.price ? parseFloat(room.price.replace('R$', '').replace(',', '.')) <= parseFloat(filters.price) : true;
            const matchesType = filters.type ? room.type.toLowerCase().includes(filters.type.toLowerCase()) : true;
            const matchesBeds = filters.beds ? room.beds >= parseInt(filters.beds) : true;
            return matchesPeople && matchesPrice && matchesType && matchesBeds;
        });
        setFilteredRooms(filtered);
    }, [filters, rooms]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <div className={styles['filter-bar']}>
                <input
                    type="number"
                    name="people"
                    placeholder="Quantidade de pessoas"
                    value={filters.people}
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Valor máximo"
                    value={filters.price}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Tipo de quarto"
                    value={filters.type}
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="beds"
                    placeholder="Número de camas"
                    value={filters.beds}
                    onChange={handleFilterChange}
                />
            </div>

            <button className={styles['filter-button']} onClick={toggleModal}>
                Filtrar
            </button>

            {isModalOpen && (
                <div className={styles['filter-modal']}>
                    <div className={styles['filter-modal-content']}>
                        <span className={styles['filter-modal-close']} onClick={toggleModal}>
                            &times;
                        </span>
                        <input
                            type="number"
                            name="people"
                            placeholder="Quantidade de pessoas"
                            value={filters.people}
                            onChange={handleFilterChange}
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Valor máximo"
                            value={filters.price}
                            onChange={handleFilterChange}
                        />
                        <input
                            type="text"
                            name="type"
                            placeholder="Tipo de quarto"
                            value={filters.type}
                            onChange={handleFilterChange}
                        />
                        <input
                            type="number"
                            name="beds"
                            placeholder="Número de camas"
                            value={filters.beds}
                            onChange={handleFilterChange}
                        />
                        <button onClick={toggleModal}>Aplicar Filtros</button>
                    </div>
                </div>
            )}

            <RoomCardList rooms={filteredRooms} />
        </div>
    );
}
