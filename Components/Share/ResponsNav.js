import * as React from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const ResponsNav = () => {

    return <>

        <Box
            className="w-60 bg-Template-color2  h-full text-white"
            role="presentation"

        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon className='text-Template-color3' />
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />

            {['تمامی فیلم ها', 'برترین فیلم ها', 'جدید ترین ها'].map((text, index) => (
                <div
                    key={text}
                    className='font-iransans
                    relative 
                    transition
                    ease-in
                    after:absolute after:h-full after:w-0
                    after:left-0
                    after:bg-Template-color3
                    after:bg-opacity-50
                    after:transform
                    after:duration-500                    
                    hover:after:w-full 
                    flex flex-row justify-start w-full
                    py-2 px-2 '
                >
                    <MailIcon className='text-Template-color3' />

                    <div className='mr-3'>
                        {text}
                    </div>
                </div>
            ))}

        </Box>

    </>
}

export default ResponsNav
