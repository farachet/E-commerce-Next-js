
'use client'
import { SelectChangeEvent } from "@mui/material";
import React,{useState,ChangeEventHandler,ChangeEvent} from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Container,Box,Typography, FormControl, InputLabel, Select, MenuItem} from '@mui/material'
type Props={
  handleFilterPrice:(price:number)=>void
  handleFilterCategory:(query:number)=>void
}

const Filter:React.FC<Props> = ({handleFilterPrice,handleFilterCategory}) => {
  // const [selectedPrice, setSelectedPrice] = useState<number>(1000000);
  // const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const handlePriceChange= (event: SelectChangeEvent<unknown>):void=> {
    
    handleFilterPrice(event.target.value as number) 
    
  };


  const handleCategoryChange = (event: SelectChangeEvent<unknown>):void => {
    
    handleFilterCategory(event.target.value as number)
  };


  return (
    <div>
       <Box  
            sx={{
              display:"flex",
              color:"white",
              gap:"10px",
              padding:"20px"
          }}
            >
                      <DragIndicatorIcon/>
                      <Typography 
                      variant='h4'
                      >
                      Filters
                      </Typography>
            </Box>
          
            <FormControl 
            
            fullWidth 
            variant="standard"
            
            sx={{
                borderBottom:"0.5px solid rgba(255, 255, 255, 0.5)",
                boxSizing:"border-box", marginTop:"20px"
            }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: '#FFF !important',
                        padding:"0px 59px",
                        fontW200eight:"bold"
                        ,fontSize:"20px" }}
                      >
                        Price
                      </InputLabel>
            <Select
            
            onChange={handlePriceChange}

              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: 'white',
                boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
  
              }}
              
            >
               
                <MenuItem value={1000000}>All Items</MenuItem>
                <MenuItem value={10}>Less than $10</MenuItem>
                <MenuItem value={20}>Less than $20</MenuItem>
                <MenuItem value={30}>less than $30</MenuItem>
                <MenuItem value={100}>less than $100</MenuItem>
           </Select>
    </FormControl>
            <FormControl 
            className='select-form'
            fullWidth 
            variant="standard"
            
            sx={{
                borderBottom:"0.5px solid rgba(255, 255, 255, 0.5)",
                boxSizing:"border-box",
                marginTop:"20px"
              
                
            }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: '#FFF !important',
                        padding:"0px 59px",fontWeight:"bold",fontSize:"20px" }}
                      >
                        Categories
                      </InputLabel>
            <Select
              onChange={handleCategoryChange}
              
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: 'white',boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
  
              }}
            >
                <MenuItem value={0}>all Category</MenuItem>
                <MenuItem value={1}>Category 1</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
           </Select>
    </FormControl>
    </div>
  )
}

export default Filter