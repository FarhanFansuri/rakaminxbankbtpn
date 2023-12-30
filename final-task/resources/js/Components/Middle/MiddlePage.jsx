import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { motion } from 'framer-motion'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

export default function MiddlePage() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={6} className='my-5'>
                        <motion.h1
                            className=''
                            initial={{
                                x: -1000,
                                opacity: 0.1
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={
                                {
                                    delay: 0.3
                                }
                            }
                        >
                            Cari Nama Domainmu
                        </motion.h1>
                        <h4 className='mt-4'>Dapatkan Promo Akhir Tahun Domain .ID! Register Baru Hanya Rp 110.000/Tahun! <br />
                            <span className='text-white'>Gunakan VOUCHER PROMOID2023</span></h4>
                    </Col>
                    <Col>
                        <InputGroup className="mt-5">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Default
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
