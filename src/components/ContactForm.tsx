'use client';

import { useActionState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import SendIcon from '@mui/icons-material/Send';
import { alpha, Theme } from '@mui/material/styles';
import { sendContactEmail, ContactFormState } from '@/app/actions/contact';

const initialState: ContactFormState = {
  success: false,
  message: '',
};

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: (theme: Theme) => alpha(theme.palette.background.default, 0.5),
    '& fieldset': {
      borderColor: 'divider',
    },
    '&:hover fieldset': {
      borderColor: (theme: Theme) => alpha(theme.palette.primary.main, 0.4),
    },
    '&.Mui-focused fieldset': {
      borderColor: 'primary.main',
    },
  },
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  return (
    <Box
      component="form"
      action={formAction}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
      }}
    >
      <TextField
        name="name"
        label="Name"
        required
        fullWidth
        disabled={isPending}
        slotProps={{
          inputLabel: { sx: { color: 'text.secondary' } },
        }}
        sx={textFieldStyles}
      />

      <TextField
        name="email"
        label="Email"
        type="email"
        required
        fullWidth
        disabled={isPending}
        slotProps={{
          inputLabel: { sx: { color: 'text.secondary' } },
        }}
        sx={textFieldStyles}
      />

      <TextField
        name="message"
        label="Message"
        required
        fullWidth
        multiline
        rows={5}
        disabled={isPending}
        slotProps={{
          inputLabel: { sx: { color: 'text.secondary' } },
        }}
        sx={textFieldStyles}
      />

      {state.message && (
        <Alert
          severity={state.success ? 'success' : 'error'}
          sx={{
            backgroundColor: (theme: Theme) =>
              alpha(state.success ? theme.palette.primary.main : theme.palette.error.main, 0.1),
            color: state.success ? 'primary.light' : 'error.light',
            border: '1px solid',
            borderColor: (theme: Theme) =>
              alpha(state.success ? theme.palette.primary.main : theme.palette.error.main, 0.3),
            '& .MuiAlert-icon': {
              color: state.success ? 'primary.main' : 'error.main',
            },
          }}
        >
          {state.message}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={isPending}
        endIcon={
          isPending ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <SendIcon />
          )
        }
        sx={{
          mt: 1,
          py: 1.5,
          alignSelf: 'flex-start',
        }}
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </Button>
    </Box>
  );
}

