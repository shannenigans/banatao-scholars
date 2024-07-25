import * as React from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';
import ScholarCard from '../components/ScholarCard';
import ScholarTabs from '../components/ScholarTabs';
import { Search } from '@mui/icons-material';

import '../styles.scss';

export default function Directory() {
    const [ isSearching, setIsSearching ] = React.useState(false);
    return (
        <div className='directory'>
            <div className='directory-filters'>
                <div className='scholar-tabs'>
                    <Typography className='directory-title' variant='h5' component='div'>Directory</Typography>
                    <ScholarTabs />
                </div>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    { isSearching ? <>
                    <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} onClick={() => setIsSearching(false)}/>
                    <TextField id="input-with-sx" label="Search directory" variant="standard" />
                    </>
                    : <Button endIcon={<Search />} onClick={() => setIsSearching(true)}/>
                  }
                </Box>
            </div>
            <div className='scholar-cards'>
                <ScholarCard />
                <ScholarCard />
                <ScholarCard />
                <ScholarCard />
                <ScholarCard />
                <ScholarCard />
            </div>
        </div>
    )
}