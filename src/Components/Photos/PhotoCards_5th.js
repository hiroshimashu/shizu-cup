import React from 'react'
import { Card } from 'semantic-ui-react'
import  src  from '../../static/cover_photo.JPG';


const PhotoCards_5th = () => (
    <Card.Group itemsPerRow={3} stackable = {true} >
        <Card color='yellow' image={src} />
        <Card color='yellow' image={src} />
        <Card color='yellow' image={src} />
        <Card color='yellow' image={src} />
        <Card color='yellow' image={src} />
    </Card.Group>
)

export default PhotoCards_5th;