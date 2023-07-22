import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

type Props={
    posts:Posts[]
}

const AllImages:React.FC<Props>= ({posts}) => {
  return (
    <div>
       <Dialog
            open={handleOpen}
            onClose={handleClosee}
            maxWidth="xs"
            fullWidth
          >
            <DialogTitle>update Picture</DialogTitle>
            <DialogContent>
              
            </DialogContent>
           
          </Dialog>
    </div>
  )
}

export default AllImages
