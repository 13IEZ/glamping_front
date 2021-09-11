import { Layout, Tag } from 'antd';

const { Content, Footer } = Layout;
const Pay: React.FC = () => {
  return (
    <div className='Form'>
      <Layout className='layout'>
        <Content style={{ padding: '50px' }}>
          <div className='site-layout-content'>
            <Tag color='red'>Страница находиться в разработке</Tag>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Glamping.kz</Footer>
      </Layout>
    </div>
  );
};

export default Pay;
