'use client';
import { Container, Navbar } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="/">Next test13.4 Gallery</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
