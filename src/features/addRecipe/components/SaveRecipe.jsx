import { React } from 'react';
import { Container, Button } from '@mui/material';
import PropTypes from 'prop-types';

SaveRecipe.propTypes = {
    closeRecipeDialog: PropTypes.func.isRequired
}

function SaveRecipe(props) {

    return (

        <Container sx={{ width: '100%', display: 'flex', align: 'center', paddingTop: '20px', justifyContent: 'end', paddingRight: '0', paddingLeft: '0' }}>
            <Button onClick={props.closeRecipeDialog} variant="contained" >
                Save
            </Button>
        </Container>

    );
}

export default SaveRecipe;