import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const GreyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  variants: 'contained',
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 'normal',
  padding: '8px 16px 8px 16px',
  boxShadow: '3px 3px rgba(0, 0, 0, 0.12)',
  color: theme.palette.getContrastText(grey[600]),
  backgroundColor: grey[600],
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: grey[700],
  },
  '&:disabled': {
    color: 'rgba(0, 0, 0, 0.26)',
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
}));

export default GreyButton;