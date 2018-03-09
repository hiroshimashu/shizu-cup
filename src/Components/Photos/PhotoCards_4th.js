import React from 'react'
import { Card } from 'semantic-ui-react'
import  src  from '../../static/cover_photo.JPG';


const PhotoCards_4th = () => (
    <Card.Group itemsPerRow={3} stackable = {true} >
        <Card color='purple' image={src} />
        <Card color='purple' image={src} />
        <Card color='purple' image={src} />
        <Card color='purple' image={src} />
        <Card color='purple' image={src} />
    </Card.Group>
)

export default PhotoCards_4th;

