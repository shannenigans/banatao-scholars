import * as React from 'react';
import HistoryAccordions from '../components/HistoryAccordions';
import { Container, Typography } from '@mui/material';

import '../styles.scss'

export default function History() {
    return (
        <Container>
            <div className='history'>
                <div className='history-header'>
                    <Typography className='directory-title' variant='h5' component='div'>History</Typography>
                </div>
                <HistoryAccordions />
            </div>
        </Container>
    )
}