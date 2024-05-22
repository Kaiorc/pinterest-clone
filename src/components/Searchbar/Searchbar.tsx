import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Searchbar = () => {
    return (
        <TextField
          variant="outlined"
          size="small"
          placeholder="Pesquise looks, refeições fáceis etc."
          sx={{
            flexGrow: 1,
            mx: 2,
            backgroundColor: 'background.paper',
            border: "none",
            borderRadius: 10,
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
    )
}