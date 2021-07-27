import React, { useRef } from 'react';
import styles from './ImgInput.module.css';

const ImgInput = ({ imgUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = e => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async e => {
    console.log(e.target.files[0]);
    const uploaded = await imgUploader.upload(e.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};
export default ImgInput;
