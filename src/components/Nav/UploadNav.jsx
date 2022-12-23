import * as S from './StyledNav';
import Button from '../common/Button/Button';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const UploadNav = ({ btnName, disabled }) => {
  return (
    <>
      <h1 className='hidden'>업로드 페이지</h1>
      <button type='button'>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </button>
      <Button name={btnName} size='ms' disabled={disabled} />
    </>
  );
};

export default UploadNav;
