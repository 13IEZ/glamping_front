import React, { useEffect } from 'react';
import { Col, Layout, Row, Pagination } from 'antd';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';
import AccommodationMiniItem from '../Main/components/AccommodationMini/components/AccommodationMiniItem';
import { useActions } from '../../hooks/useAction';

import './Accommodations.scss';

const { Content } = Layout;

const Accommodations: React.FC = () => {
  const { allAccommodations, pages } = useTypedSelectorHook(state => state.accommodations);
  const { fetchAllAccommodations } = useActions();
  const { fetchNextAccommodationPages } = useActions();

  console.log(allAccommodations);
  useEffect(() => {
    fetchAllAccommodations();
  }, []);

  const onChange = (pageNumber: number) => {
    fetchNextAccommodationPages(pageNumber - 1);
  };

  const totalPages = Number(pages) * 10;
  const noPages = totalPages < 2;

  const accommodationsList = allAccommodations.map(accommodation => {
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

  return (
    <div className='container'>
      <Layout className='accommodation-body'>
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
