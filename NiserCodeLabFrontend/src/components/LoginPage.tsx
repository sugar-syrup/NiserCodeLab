import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import useAuthStore from './datastores/authstore';

const LoginPage: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuthStore.getState();

  const title = "Type your credentials";
  const typingSpeed = 150; // Adjust typing speed here

  const handleLogin = async () => {
    await login(username, password);
  }
  useEffect(() => {
    let currentIndex = 0;
    const typeTitle = () => {
      if (currentIndex < title.length) {
        const nextChar = title[currentIndex] !== undefined ? title[currentIndex] : '';
        setDisplayedText(prev => prev + nextChar);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeTitle, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [title]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Adjust cursor blink speed here

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#f7951c',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Courier New, Courier, monospace',
        position: 'relative',
        width: '100vw', // Ensure full viewport width
      }}
    >
      {/* Buttons positioned in the top right corner */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: '#f7951c',
            borderColor: '#f7951c',
            fontFamily: 'Courier New, Courier, monospace',
            '&:hover': {
              borderColor: '#f7951c',
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
            }
          }}
          onClick={() => navigate('/')}
        >
          Home
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#f7951c',
            color: '#000',
            fontFamily: 'Courier New, Courier, monospace',
            '&:hover': {
              backgroundColor: '#00cc00',
            }
          }}
        >
          Sign Up
        </Button>
      </Stack>

      {/* Terminal title text */}
      <Box
        component="h1"
        sx={{
          fontSize: '2.5rem',
          marginBottom: '20px',
        }}
      >
        {displayedText}
        <Box
          component="span"
          sx={{
            fontWeight: 'bold',
            color: '#f7951c',
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          |
        </Box>
      </Box>

      {/* Login Form */}
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        border: '1px solid #f7951c',
        borderRadius: '5px',
        backgroundColor: '#000',
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{
          input: {
            color: '#f7951c',
          },
          label: {
            color: '#f7951c',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#f7951c',
            },
            '&:hover fieldset': {
              borderColor: '#f7951c',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f7951c',
            },
          },
        }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          input: {
            color: '#f7951c',
          },
          label: {
            color: '#f7951c',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#f7951c',
            },
            '&:hover fieldset': {
              borderColor: '#f7951c',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f7951c',
            },
          },
        }}
      />
      <Button
        variant="contained"
        onClick={handleLogin}
        sx={{
          backgroundColor: '#f7951c',
          color: '#000',
          fontFamily: 'Courier New, Courier, monospace',
          '&:hover': {
            backgroundColor: '#00cc00',
          }
        }}
      >
        Login
      </Button>
    </Box>
    </Box>
  );
};

export default LoginPage;
