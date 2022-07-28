import React from 'react'
import Header from "../components/Header";
import {Col, Row} from "reactstrap";
import {Navigate, Route, Routes} from "react-router-dom";
import routes from '../routes'

function Home() {
    return(
        <div>
            <Row>
                <Col>
                    <Header></Header>
                </Col>
            </Row>

            <Routes>
                {routes.map((route, idx) => {
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element />}
                            />
                        )
                    )
                })}
                <Route path="/" element={<Navigate to="dashboard" replace />} />
            </Routes>
        </div>
    )
}

export default Home;
