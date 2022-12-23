import React from "react";
import "./app.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Input = () => {

    const [number, setNumber] = React.useState<number>();

    const addItem = () => {
        fetch("http://localhost:8000/app/number/", {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(number)
        }).then(async function (response) {
            console.log(response.text());
        });
    };

    return (
        <div>
            <Container>
                <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="h6" gutterBottom>
                        Ajouter un nombre :{" "}
                    </Typography>

                    <Grid container direction="column" alignItems="flex-start">
                        <TextField
                            id="outlined-basic"
                            label="Entrer un nombre"
                            variant="outlined"
                            sx= {{ marginBottom: 2, backgroundColor: 'white' }}
                        />
                        <Button variant="contained" onClick={() => addItem()}>Ajouter</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Input;
