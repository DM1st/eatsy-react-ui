import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Container, List, ListItem, ListSubheader, ListItemSecondaryAction, Paper, InputBase, Dialog, Divider, IconButton, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { React, useState } from "react";



const theme = createTheme({
    palette: {
        camouflage: {
            main: "	#ffffff",
        },
    },
});

export default function AddIngredientsDialog({ open, closeIngredientsDialog }) {

    //State object - initialise with an empty array
    const [ingredients, setIngredients] = useState([]);

    //State object for adding new ingredient to ingredient list
    const [inputValue, setInputValue] = useState("");

    const handleAddButtonClick = () => {

        //Creates new ingredient object which gets pushed to the Array
        const newIngredient = {
            ingredientName: inputValue,
            key: Date.now(),
        };

        //Copies the existing array (to avoid mutating state) and add the newIngredient object on to the end. 
        const newIngredients = [...ingredients, newIngredient];

        //Pushes the new array back into state.
        setIngredients(newIngredients);
        //Reset the inputValue to empty the string for ease of adding new ingredients.
        setInputValue("");
    };

    //Remove ingredient from the list
    //Modify the current stateful list with a filter. 
    const handleRemoveIngredientClick = (key) => {

        const updatedIngredientList = ingredients.filter((ingredient) => ingredient.key !== key);
        setIngredients(updatedIngredientList);

    }

    const handleExistingIngredientEdit = (updatedIngredientName, key) => {

        ingredients.forEach(ingredient => {
            if (ingredient.key === key) {
                ingredient.ingredientName = updatedIngredientName;
            }
        })

    }



    return (

        <Dialog
            open={open}
            onClose={closeIngredientsDialog}
            sx={{ width: "100%", display: "flex", justifyContent: "space-between", align: "center", paddingTop: "5px", paddingBottom: "5px", paddingRight: "0", paddingLeft: "0" }}
            aria-labelledby="child-dialog-ingredients"
        >
            <Paper
                component="form"
                sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
            >
                {/*Whever user types, onChange gets called. React passes event in automatically so we can obtain the value*/}
                {/*setInputValue is then called to set what the user has typed in as state. */}
                {/*value of the input to be whatever value is stoered in the inputValue state variable. */}
                <InputBase
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddButtonClick();
                        }
                    }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Add ingredient"
                    inputProps={{ "aria-label": "Add new ingredient" }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton onClick={() => handleAddButtonClick()} color="primary" sx={{ p: "10px" }} aria-label="add ingredient">
                    <AddIcon />
                </IconButton>
            </Paper>
            {/* Map function to loop over list and display the items */}
            <List
                subheader={
                    <ListSubheader
                        color={"primary"}

                    >
            Ingredients
                    </ListSubheader>
                }
            >
                {ingredients.map((ingredient) => {
                    return (
                        <ListItem
                            key={ingredient.key}
                            dense
                            divider
                        >
                            <ThemeProvider theme={theme}>
                                <TextField
                                    focused
                                    color="camouflage"
                                    variant="standard"
                                    defaultValue={ingredient.ingredientName}
                                    onChange={(event) => handleExistingIngredientEdit(event.target.value, ingredient.key)}
                                />
                            </ThemeProvider>
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => handleRemoveIngredientClick(ingredient.key)} edge="end" aria-label='deleteIngredient'>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
            <Container sx={{ width: "100%", display: "flex", align: "center", paddingTop: "20px", justifyContent: "end", paddingRight: "0", paddingLeft: "0" }}>
                <Button onClick={closeIngredientsDialog}>
          Done
                </Button>
            </Container>
        </Dialog>
    );
}

AddIngredientsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    closeIngredientsDialog: PropTypes.func.isRequired
}