import {
    Button,
    Typography,
    ButtonGroup,
    Container,
    makeStyles,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from "@material-ui/core/";
import { Send, KeyboardArrowRight } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: "block",
    },
});

const Create = () => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [details, setDetail] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [detailError, setDetailError] = useState(false);
    const [category, setCategory] = useState("money");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailError(false);

        if (title === "") {
            setTitleError(true);
        }

        if (details === "") {
            setDetailError(true);
        }

        if (title && details) {
            fetch("http://localhost:8080/notes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, details, category })
            }).then(() => history.push("/"))
        }
    };

    return (
        <Container size="sm">
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Note Label"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={titleError}
                />
                <TextField
                    onChange={(e) => setDetail(e.target.value)}
                    className={classes.field}
                    label="Detail"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    error={detailError}
                />

                <FormControl className={classes.field}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <FormControlLabel
                            value="money"
                            control={<Radio />}
                            label="Money"
                        />
                        <FormControlLabel
                            value="todos"
                            control={<Radio />}
                            label="Todos"
                        />
                        <FormControlLabel
                            value="reminders"
                            control={<Radio />}
                            label="Reminders"
                        />
                        <FormControlLabel
                            value="work"
                            control={<Radio />}
                            label="Work"
                        />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    endIcon={<KeyboardArrowRight />}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default Create;
