import * as React from 'react';

import { Button, Card, CardMedia, CardActions, CardContent, Typography } from '@mui/material';
/**
 * 
 * @returns class, name, school
current role
degrees
network
bio
 */

export default function ScholarCard() {
    const [showBio, setShowBio] = React.useState(false);
    const onLearnMoreClicked = () => {
        setShowBio(!showBio)
    }

    const getCardContents = (showBio) => {
        return showBio ? (
            <>
                <CardContent className='content'>
                    <Typography gutterBottom variant="body1" component="div">
                        About Me
                    </Typography>
                    <Typography variant="body1" component="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small" onClick={onLearnMoreClicked}>Learn More</Button>
                </CardActions>
            </>
        )
            :
            (<>
                <CardContent className='content'>
                    <CardMedia
                        sx={{ height: 100 }}
                        image='../placeholder.jpg'
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        Shannen Barrameda
                    </Typography>
                    <Typography variant="body1" component="div">
                        Software Engineer at Microsoft
                    </Typography>
                    <Typography variant="body1" component="div">
                        Class of '17
                    </Typography>
                    <Typography variant="body2" component="text.primary">
                        The University of Texas at Dallas, BS Computer Science '21
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        9093635565 | sbarrameda17@gmail.com
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small" onClick={onLearnMoreClicked}>Learn More</Button>
                </CardActions>

            </>
            )
    }

    return (
        <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
            {getCardContents(showBio)}
        </Card>
    )
}