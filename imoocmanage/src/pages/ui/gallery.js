import React, {Component} from 'react';
import {Card, Row, Col, Modal} from "antd";


class Gallerys extends Component {
    state = {
        currentImg: '',
        visible: false
    }
    openGallery = (imgSrc) => {
        console.log(imgSrc);
        this.setState({
            currentImg: '/gallery/' + imgSrc,
            visible: true
        })
    }

    render() {
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png']
        ]
        const imgList = imgs.map((list) => list.map((item) =>
            <Card key={item}
                  style={{marginBottom: '10px'}}
                  cover={<img src={'/gallery/' + item} alt=''/>}
                  onClick={() => this.openGallery(item)}
            >
                <Card.Meta
                    title="React Admin"
                    description="I Love Imooc"
                />
            </Card>))
        return (
            <div>
                <Row gutter={16}>
                    {imgList.map((item,index) => {
                        return (
                            <Col md={4} key={index}>
                                {item}
                            </Col>)
                    })}
                </Row>
                <Modal
                    visible={this.state.visible}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                >
                    <img
                        style={{
                            display: 'inline-block'
                        }}
                        src={this.state.currentImg} alt=''/>
                </Modal>
            </div>
        );
    }
}

export default Gallerys;