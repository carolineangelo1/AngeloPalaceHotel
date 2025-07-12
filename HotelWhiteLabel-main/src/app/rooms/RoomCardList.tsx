'use client';
import styles from './page.module.css';
import Image from 'next/image';

interface Room {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
    people: number;
    beds: number;
    type: string;
    priceCurrency: string;
}

interface RoomCardListProps {
    rooms: Room[];
}

export default function RoomCardList({ rooms }: RoomCardListProps) {
    return (
        <div className={styles['room-card-list']}>
            {rooms.map((room, index) => (
                <div
                    key={room.id || index} // Ensure unique key
                    className={`${styles['room-card']} ${index % 2 !== 0 ? styles['room-card-reversed'] : ''}`}
                >
                    {index % 2 !== 0 && (
                        <Image src={room.image} alt={room.title} width={1920} height={1080} />
                    )}
                    <div
                        className="room-card-content"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            height: '35vh',
                            padding: '3vw',
                        }}
                    >
                        <h2>{room.title}</h2>
                        <p>{room.description}</p>
                        <p>
                            <span className="value">{room.priceCurrency}</span>
                        </p>
                    </div>
                    {index % 2 === 0 && (
                        <Image src={room.image} alt={room.title} width={1920} height={1080} />
                    )}
                </div>
            ))}
        </div>
    );
}
