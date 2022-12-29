import { Container, Button } from '@mui/material';


function SaveRecipe() {

    return (

        <Container sx={{ width: '100%', display: 'flex', align: 'center', paddingTop: '20px', justifyContent: 'end', paddingRight: '0', paddingLeft: '0' }}>
            <Button variant="contained" >
                Save Recipe
            </Button>
        </Container>

    );
};

export default SaveRecipe;