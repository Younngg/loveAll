const PlaceForm = () => {
  return (
    <form>
      <div>
        <label htmlFor='name'>가게명</label>
        <input className='border' id='name' type='text' />
      </div>
      <div>
        <label htmlFor='address'>주소</label>
        <input className='border' id='address' type='text' />
      </div>
      <div>
        <div>
          <input id='PWD' type='checkbox' />
          <label htmlFor='PWD'>장애친화구역</label>
        </div>
        <div>
          <input id='kids' type='checkbox' />
          <label htmlFor='kids'>어린이친화구역</label>
        </div>
      </div>
      <div>
        <label htmlFor='description'>설명</label>
        <textarea
          className='border'
          name='description'
          id='description'
        ></textarea>
      </div>
      <div>
        <button className='border'>작성하기</button>
      </div>
    </form>
  );
};

export default PlaceForm;
