import { Container, Typography, Button } from '@mui/material';


function AddMethod() {

    return (

        <Container sx={{ width: '100%', display: 'flex', align: 'center', paddingTop: '5px', paddingBottom: '5px', justifyContent: 'space-between', paddingRight: '0', paddingLeft: '0' }}>
            <Typography color="textSecondary">Add recipe method</Typography>
            <Button variant="outlined" >
                Method
            </Button>
        </Container>

    );
};

export default AddMethod;