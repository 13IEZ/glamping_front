import React, { useState } from 'react';
import { Col, Layout, Row, Pagination, Button } from 'antd';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import AccommodationMiniItem from '../Main/components/AccommodationMini/components/AccommodationMiniItem';
import { useActions } from '../../hooks/useAction';
import AccommodationSidebar from './components/AccommodationSidebar';
import './Accommodations.scss';

const { Content } = Layout;

const Accommodations: React.FC = () => {
  const { allAccommodations, pages } = useTypedSelectorHook(state => state.accommodations);
  const { fetchNextAccommodationPages } = useActions();
  const [className, setClassName] = useState('sidebar');
  const { filters } = useTypedSelectorHook(state => state.accommodations);

  const onChange = (pageNumber: number) => {
    fetchNextAccommodationPages(pageNumber - 1, filters);
  };

  const totalPages = Number(pages) * 10;
  const noPages = totalPages < 2;

  let accommodationsList;
  if (allAccommodations.length > 0) {
    accommodationsList = allAccommodations.map(accommodation => {
      return (
        <Col key={accommodation._id} className='gutter-row' style={{ margin: 10 }}>
          <AccommodationMiniItem
            _id={accommodation._id}
            title={accommodation.title}
            rent={accommodation.rent}
            description={accommodation.description}
            roominess={accommodation.roominess}
            image={accommodation.image}
            season={accommodation.season}
            category={accommodation.category}
            rating={accommodation.rating}
          />
        </Col>
      );
    });
  } else {
    accommodationsList = null;
  }

  const openSidebar = () => {
    setClassName('sidebar-active');
  };

  const closeSidebar = () => {
    setClassName('sidebar');
  };

  return (
    <div className='container'>
      <Layout className='accommodation-body'>
        <div className='sider'>
          <div className='buttons'>
            <Button className='btn openbtn' onClick={openSidebar}>
              показать фильтры
            </Button>
            <Button className='btn closebtn' onClick={closeSidebar}>
              скрыть фильтры
            </Button>
          </div>
          <div className={className}>
            <AccommodationSidebar />
          </div>
        </div>
        <Content>
          <Row className='accommodation-content'>
            {accommodationsList}
            {accommodationsList}
            {accommodationsList}
          </Row>
          <div className='pagination'>{noPages ? <></> : <Pagination total={totalPages} onChange={onChange} />}</div>
        </Content>
      </Layout>
    </div>
  );
};

export default Accommodations;
