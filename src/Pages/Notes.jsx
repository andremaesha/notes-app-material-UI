import { useEffect, useState } from "react";
import { Container, Grid} from "@material-ui/core";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/notes")
            .then((res) => res.json())
            .then((data) => setNotes(data));
    }, []);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8080/notes/${id}`, {
            method: "DELETE",
        });

        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    const breakPoints = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <Container>
            <Masonry
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes.map((note) => (
                    <div key={note.id}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </div>
                ))}
            </Masonry>
        </Container>
    );
};

export default Notes;
