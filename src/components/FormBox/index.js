import { Box, Card, TextField, Typography, Container } from "@mui/material";
import { useState } from "react";
import ButtonSubmit from "../ButtonSubmit";
import { useRouter } from "next/router";

export default function Forms() {
    const [pedidoId, setPedidoId] = useState('');
    const router = useRouter();

    const inputChange = (event) => {
        const { value } = event.target;
        event.target.value = value.replace(/\D/, '');
        setPedidoId(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        router.push(`/track/${pedidoId}`)
    };

    return (
        <>

            <Container maxWidth="sm">
                <Box sx={{ my: 4 }}>
                    <Card sx={{
                        backgroundColor: '#006AF0',
                        padding: '20px',
                        borderRadius: '10px',
                        color: 'white',
                        display: 'block',
                        margin: '0 auto',
                    }}>
                        <Typography variant="h5" gutterBottom color="white">
                            Olá!
                        </Typography>
                        <Typography variant="body1" gutterBottom color="white">
                            Acompanhe o status da sua entrega.  📦
                        </Typography>
                        <Typography variant="body1" gutterBottom color="white">
                            Para começar, insira o código de rastreamento do seu pedido.
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <TextField
                                variant="standard"
                                label="Número do pedido"
                                name="pedidoId"
                                value={pedidoId}
                                type="text"
                                placeholder="Insira o número do pedido sem caracteres especiais."
                                inputProps={{
                                    pattern: "[0-9]*",
                                    onInput: inputChange,
                                }}
                                fullWidth
                                required
                            />
                            <Box textAlign="center">
                                <ButtonSubmit text="rastrear" />
                            </Box>
                        </form>
                    </Card>
                </Box >
            </Container>

        </>
    )
}
