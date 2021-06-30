import { Layout, Row, Col, List, Typography, Space } from 'antd';
const { Footer } = Layout;
import { Link } from 'react-router-dom';
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import './CustomFooter.scss';
import React from 'react';

const CustomFooter: React.FC = () => {
  return (
    <Footer className='footer'>
      <Row>
        <Col flex='auto'>
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
        <Col flex='auto'>
          {' '}
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
        <Col flex='auto'>
          <Space size='middle'>
            <a href='#'>
              <FacebookFilled style={{ fontSize: '32px' }} />
            </a>

            <a href='#'>
              <InstagramFilled style={{ fontSize: '32px' }} />
            </a>
          </Space>
        </Col>
      </Row>
      <Row justify='center'>
        <Typography> &copy; 2021 Все права защищены </Typography>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
