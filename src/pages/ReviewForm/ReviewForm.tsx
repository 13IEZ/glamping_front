import { useState } from 'react';

import {
  Button,
  Form,
  Input,
} from 'antd';

import { useActions } from '../../hooks/useAction';
import { useTypedSelectorHook } from '../../hooks/useTypedSelector';

const { TextArea } = Input;
const ReviewForm: React.FC = () => {
  
  const { user } = useTypedSelectorHook(state => state.users);
  const [state, setState] = useState({
    name: {user},
    note: '',
  });
  const { signInUser } = useActions();

  const submitFormHandler = () => {
    signInUser(state);
  };

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className='Form'>
      <Form name='note' className='review-form' initialValues={{ remember: true }} onFinish={submitFormHandler}>
        <h2 className='Form-header'>Отзыв</h2>
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <TextArea rows={4} 
            name='Note'
            className='form_input'
            placeholder='Опишите ваши впечатления'
            onChange={inputChangeHandler}/> 
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='review-form-button'>
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReviewForm;