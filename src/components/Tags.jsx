import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Tag({ text, color }) {
  return <Badge bg={color}>{text}</Badge>;
}

export default Tag;
