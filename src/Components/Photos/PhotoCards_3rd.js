import React from 'react'
import { Card } from 'semantic-ui-react'
import  src  from '../../static/cover_photo.JPG';


const PhotoCards_3rd = () => (
    <Card.Group itemsPerRow={3} stackable = {true} >
        <Card color='orange' image={src} />
        <Card color='orange' image={src} />
        <Card color='orange' image={src} />
        <Card color='orange' image={src} />
        <Card color='orange' image={src} />
    </Card.Group>
)

export default PhotoCards_3rd;

