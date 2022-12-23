import React from "react";
import "./app.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Item(props: { value: number; _id: string; onDelete: Function }) {
    const [number, setNumber] = React.useState(0);

    React.useEffect(() => {
        setNumber(props.value);
    });

    const deleteItem = () => {
        fetch("http://localhost:8000/app/number/" + props._id, {
            method: "DELETE",
        }).then(async function (response) {
            console.log(response.text());
            props.onDelete();
        });
    };

    return (
        <div className="item-container">
            <Container>
                <Grid container direction="row" justifyContent="flex-start">
                    <Grid item xs={2}>
                        <Typography variant="h6">{number}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <button
                            className="delete-button"
                            onClick={() => deleteItem()}
                        >
                            X
                        </button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Item;
