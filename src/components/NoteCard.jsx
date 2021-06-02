import {
    Card,
    CardHeader,
    IconButton,
    Typography,
    CardContent,
    makeStyles,
    Avatar,
} from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import { DeleteOutline } from "@material-ui/icons";

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category === "work") {
                return yellow[700];
            } else if (note.category === "money") {
                return green[500];
            } else if (note.category === "todos") {
                return pink[500];
            }

            return blue[500];
        }
    },
});

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note);

    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutline />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NoteCard;
