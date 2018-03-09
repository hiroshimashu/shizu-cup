import React from 'react'
import { Card } from 'semantic-ui-react'
import  src  from '../../static/cover_photo.JPG';


const PhotoCards = () => (
    <Card.Group itemsPerRow={3} stackable = {true} >
        <Card color='red' image={src} />
        <Card color='red' image={src} />
        <Card color='red' image={src} />
        <Card color='red' image={src} />
        <Card color='red' image={src} />
    </Card.Group>
)

export default PhotoCards;

