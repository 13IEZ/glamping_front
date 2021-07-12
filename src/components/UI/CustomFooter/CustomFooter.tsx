import './CustomFooter.scss';

import React from 'react';

import { Col, Layout, List, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { FacebookFilled, InstagramFilled } from '@ant-design/icons';

const { Footer } = Layout;

const CustomFooter: React.FC = () => {
  return (
    <Footer className='footer'>
      <div className='container'>
        <Row>
          <Col className='footer-container__item' flex='auto'>
            <List split={false}>
              <List.Item>
                <Link to='/investor'>Инвесторам </Link>
              </List.Item>
              <List.Item>
                <Link to='/tourists'>Туристам</Link>
              </List.Item>
              <List.Item>
                <Link to='/landlords'>Арендодателям</Link>
              </List.Item>
            </List>
          </Col>
          <Col className='footer-container__item' flex='auto'>
            <List.Item>
              Адрес: <a href='#'>Казахстан, г. Алматы, пр. Жибек Жолы, 135/10А, офис 514</a>
            </List.Item>
            <List.Item>
              Телефон: <a href='#'>+7-707-777-77-77</a>
            </List.Item>
            <List.Item>
              Email: <a href='#'>example@mail.ru</a>
            </List.Item>
          </Col>
          <Col className='footer-container__item' flex='auto'>
            <Space size='large'>
              <a href='#'>
                <FacebookFilled style={{ fontSize: '32px' }} />
              </a>

              <a href='#'>
                <InstagramFilled style={{ fontSize: '32px' }} />
              </a>
            </Space>
          </Col>
        </Row>
        <Row justify='center' style={{ marginTop: '10px' }}>
          <Typography> &copy; 2021 Все права защищены </Typography>
        </Row>
      </div>
    </Footer>
  );
};

export default CustomFooter;
