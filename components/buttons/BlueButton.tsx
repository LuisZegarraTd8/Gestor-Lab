import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlueButton = styled(Button)<ButtonProps>(({ theme }) => ({
  variants: 'contained',
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 'normal',
  padding: '8px 16px 8px 16px',
  boxShadow: '3px 3px rgba(0, 0, 0, 0.12)',
  color: theme.palette.getContrastText('#5479C2'),
  backgroundColor: '#5479C2',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: '#3965BB',
  },
  '&:disabled': {
    color: 'rgba(0, 0, 0, 0.26)',
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
}));

export default BlueButton;
