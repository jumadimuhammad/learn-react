/** @format */

import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export const Buton = () => (
    <Container className="mt-3">
        <Row>
            <Col md={12}>
                <Button variant="primary" size="sm" disabled>
                    Primary button
                </Button>{" "}
                <Button variant="secondary" size="sm" disabled>
                    Button
                </Button>{" "}
                <Button href="#" variant="secondary" size="sm" disabled>
                    Link
                </Button>
            </Col>
        </Row>
    </Container>
);
