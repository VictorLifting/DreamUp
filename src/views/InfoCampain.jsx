import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormGroup } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { QrModal } from '../components/QrModal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "1rem",

  };



export const InfoCampain = () => {

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (


    <Box    

    sx={{
       display: 'flex',
       p:10,

     }}>


        <Box>
            <h2>Salva a Roco</h2>
          <img src="./imgs/roco.png" alt="" />

          <Box sx={{

            display: 'flex',
            justifyContent: 'space-between'
            }}> 

            <p>Creado por: Juan Pérez</p> <p>Ver donaciones</p> </Box>
            <p>Creada el 20 de junio de 2022</p>

        </Box>
        <Box sx={{
            p:4,
        }}>
        <Box sx={{
            display: 'flex'
        }}>
        <strong>Categoria: </strong> <p> Animales</p>
        </Box>
        <Box sx={{
            display: 'flex'
        }}>
        <strong>Descripción: </strong> <p>Ayudenme a salvar a mi gato Rocco. Ha sido diagnosticado con una enfermadad muy grave y hay que operar. Sin embargo mi familia no posee con los recursos necesarios para la operación y la hospitalización. </p>
        </Box>

        <Box>
        <strong>Meta:</strong>


        </Box>

        <Box>
            <FormGroup>

            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Acepto términos y condiciones" />

            <Button 
              onClick={handleOpen}
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Quiero Donar!
            </Button>

            </FormGroup>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
            <Box sx={style}>
            <QrModal/>
            </Box>  
            </Modal>
        </Box>


        </Box>


    </Box>

    

  )
}
