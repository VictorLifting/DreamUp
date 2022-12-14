import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



export const Banner2 = () => {
  return (

    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        mt: 3,
        alignItems: 'center',
        backgroundColor:"#C58ADE",
       paddingLeft:5,
    }}>

    <Box>
    <h2>Tienes una campaña en mente?</h2>
    <p>Hazla realidad con nosotros!</p>
    <Box sx={{
    
    }
    }>
        <Button 
        type="button"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        >
        Crear campaña
        </Button>

        <Button
        type="button"
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
        >
          
        Cómo funciona
        </Button>


</Box>
</Box>
            <Box
                component="img"
                src="./imgs/banner2.png"
                alt="suitcase"
                sx={{ 
                        marginRight: 0,
                    }}
              />

</Box>



  )
}







