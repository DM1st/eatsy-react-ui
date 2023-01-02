import { React } from 'react';  
import { Typography, Container, Fab } from '@mui/material';
import { blue } from '@mui/material/colors';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


  function RecipePhoto () {
    
    //Define the handle click here

    return (
      <Container sx={{ width: '100%', padding: '0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography color="textSecondary">Add recipe photo</Typography>
        <Container sx={{ display: 'none' }}>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          /*onChange={this.handleUploadClick}*/
          />
        </Container>
        <label htmlFor="contained-button-file">
          <Fab component="span" sx={{ color: blue[700], backgroundColor: 'white' }}>
            <AddPhotoAlternateIcon />
          </Fab>
        </label>
      </Container>
    );

  };

  export default RecipePhoto;