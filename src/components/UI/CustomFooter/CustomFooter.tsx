import './CustomFooter.scss';

import React from 'react';

import { Col, Layout, List, Row } from 'antd';
import { Link } from 'react-router-dom';

import { FacebookOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const CustomFooter: React.FC = () => {
  return (
    <Footer className='footer'>
      <div className='container'>
        <Row>
          <Col className='footer-container__item'>
            <List split={false}>
              <List.Item>
                <Link to='/store/[]' className='footer-container__text footer__hover'>
                  Продукты
                </Link>
              </List.Item>
              <List.Item>
                <a href='https://glamping.kz/' className='footer-container__text footer__hover'>
                  О нас
                </a>
              </List.Item>
              <List.Item>
                <Link to='/locations-map' className='footer-container__text footer__hover'>
                  Глэмпинги
                </Link>
              </List.Item>
            </List>
            <p className='footer-container__text footer-container__text_copy'>
              © 2021 All rights reserved. Все права защищены.
            </p>
          </Col>

          <Col className='footer-container__item'>
            <div className='socials'>
              <a href='mailto:sattyarba@gmail.com' className='socials__link'>
                <MailOutlined style={{ fontSize: '32px' }} />
              </a>
              <a href='https://www.facebook.com' className='socials__link'>
                <FacebookOutlined style={{ fontSize: '32px' }} />
              </a>
              <a href='https://www.instagram.com/' className='socials__link'>
                <InstagramOutlined style={{ fontSize: '32px' }} />
              </a>
            </div>
            <List split={false} className='constant-list'>
              <List.Item>
                <a href='tel:+77078119318' className='footer-container__text footer-container__text_tel footer__hover'>
                  +7 (707) 811 93 18
                </a>
              </List.Item>
              <List.Item>
                <a
                  href='http://glamping-ci.ddns.net:3000/'
                  className='footer-container__text footer-container__text_addr footer__hover'
                >
                  РК, г. Алматы, проспект Жибек Жолы, 135/10А, офис 514
                </a>
              </List.Item>
            </List>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default CustomFooter;
