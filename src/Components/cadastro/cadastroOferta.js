import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Texto, Titulo } from '../styles/Textos';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Link from '@mui/material/Link';
import { useState } from "react"

import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function CadastroOferta() {

    const[plataformas, setPlataformas] = useState([]);

    const[categorias, setCategorias] = useState([]);


    const [formData, setFormData] = useState({
        nome: '',
        precoAtual: 0,
        precoAntigo: 0,
        descricao: '',
        categoria: '',
        plataforma: '',
        link: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await fetch('sua-url-da-api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário');
          }
    
          // Limpar o formulário após o envio bem-sucedido
          setFormData({
            nome: '',
            precoAtual: 0,
            precoAntigo: 0,
            descricao: '',
            categoria: '',
            plataforma: '',
            link: '',
          });
    
          alert('Oferta postada com sucesso, obrigado por ajudar nossa comunidade!');
        } catch (error) {
          console.error('Erro:', error);
          alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
        }
    };

    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Titulo color='white' size='32px' >Poste uma oferta!</Titulo>
          <Box component="form"
            sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}>  
            <Box sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}}>     
            
              <div>
                <TextField
                label="Jogo"
                id="filled-start-adornment"
                variant="filled"
                name='nome'
                onChange={handleChange}
                />

                <TextField
                label="Link"
                id="filled-start-adornment"
                variant="filled"
                name='link'
                onChange={handleChange}
                />
              </div>

              <div>
                <FormControl variant="filled" sx={{ m: 1, width: '25ch' }}>
                  <InputLabel htmlFor="filled-adornment-amount">Preço antigo</InputLabel>
                  <FilledInput
                    id="filled-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    type='number'
                  />
                </FormControl>

                <FormControl  variant="filled" sx={{ m: 1, width: '25ch' }}>
                <InputLabel htmlFor="filled-adornment-amount">Preço em promoção</InputLabel>
                <FilledInput
                  id="filled-adornment-amount"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  type='number'
                />
              </FormControl>

              </div>
              
              <div>
                <TextField
                id="filled-select-currency"
                select
                label="Categoria"
                helperText=""
                variant="filled"
                >
                {categorias.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
                <TextField
                id="filled-select-currency"
                select
                label="Plataforma"
                helperText=""
                variant="filled"
                >
                {plataformas.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
              </div>
            </Box>
            <TextField
              id="filled-multiline"
              label="Descrição"
              multiline
              rows={4}        
              sx={{ m: 1, width: '51ch'}}
              placeholder='Descreva aqui como os gamers podem aproveitar sua oferta!'
              variant="filled"
            />            
          </Box>

          <div style={{ display: 'flex',justifyContent: 'space-around', alignItems: 'center', marginTop: 10 + 'px' }}> 

            <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ marginRight: 10 + 'px'}}
            >
              Capa do jogo
              <VisuallyHiddenInput type="file" />
            </Button>       
            
            <Button variant="contained" endIcon={<SendIcon />} color='success' type="submit">
                Postar
            </Button>

          </div>

    </div>
    );
};

export default CadastroOferta;