/** @format */

import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

export const Fom = (event) => (
    <Container className="mt-4">
        handleChange = (event) =>{" "}
        {this.ListeningStateChangedEvent({ name: event.target.value })}
        <h1 className="text-center">Learn form</h1>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <Form.Group onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Col>
                            <Form.Control
                                size="lg"
                                type="text"
                                placeholder="Large text"
                                onChange={this.handleChange()}
                            />
                        </Col>
                    </Form.Row>
                    <Button>Submit</Button>
                </Form.Group>
            </Col>
        </Row>
    </Container>
);
