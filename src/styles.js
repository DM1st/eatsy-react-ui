import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        marginTop: '40px',
    }
}));

export default useStyles;