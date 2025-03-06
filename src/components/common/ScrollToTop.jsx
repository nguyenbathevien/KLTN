import { UpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${show ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <UpOutlined/>
    </div>
  );
};

export default ScrollToTop;
