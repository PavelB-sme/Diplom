import { useDrag } from 'react-dnd';
import styles from './DraggableFilm.module.css';
import type { Film } from '../../../interfaces/Film.interface';

interface DraggableFilmProps {
    film: Film;
    backgroundColor: string;
    onDelete: (id: number) => void;
}

export const DraggableFilm = ({ film, backgroundColor, onDelete }: DraggableFilmProps) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'FILM',
        item: { id: film.id, film },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [film]);

    return (
        <div
            ref={drag as any}
            style={{ backgroundColor }}
            className={`${styles.film} ${isDragging ? styles.dragging : ''}`}
        >
            <img src={film.film_poster} alt="постер фильма" className={styles['film-poster']}/>
            <div className={styles.content}>
                <div className={styles.name}>{film.film_name}</div>
                <div className={styles.duration}>{film.film_duration}&nbsp;минут</div>
            </div>
            <img 
<<<<<<< Updated upstream
                src="../public/Admin/delete-icon.svg" 
=======
                src="../Admin/delete-icon.svg" 
>>>>>>> Stashed changes
                alt="иконка удаления" 
                className={styles.icon} 
                onClick={() => onDelete(film.id)}
            />
        </div>
    );
};