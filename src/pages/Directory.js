import * as React from 'react';
import ScholarCard from '../components/ScholarCard';
 
import '../styles.scss';

export default function Directory() {
    return (
        <div className='directory'>
            <ScholarCard />
            <ScholarCard />
            <ScholarCard />
            <ScholarCard />
            <ScholarCard />
            <ScholarCard />
        </div>
    )
}