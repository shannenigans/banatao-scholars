import { Favorite } from '@mui/icons-material';
import { BottomNavigation, Link, Paper, Typography } from '@mui/material';
import * as React from 'react';

import '../styles.scss'

export default function BottomNav() {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>
            <BottomNavigation>
                <Typography variant='body1' className='bottomNav-text'>Made with <Favorite className='heart-icon'/> by <Link href='https://github.com/shannenigans'>Shannen Barrameda</Link></Typography>
            </BottomNavigation>
        </Paper>
    )
}