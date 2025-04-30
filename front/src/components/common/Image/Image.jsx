import { useState } from 'react';
import { Skeleton } from '@mui/material';
import PropTypes from 'prop-types';

const Image = ({
  src,
  alt,
  width = '100%',
  height = '100%',
  style,
  className,
  objectFit = 'cover',
  borderRadius = 2,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width, height, position: 'relative' }} className={className}>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ borderRadius }}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit,
          borderRadius,
          display: isLoading ? 'none' : 'block',
          ...style,
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  className: PropTypes.string,
  objectFit: PropTypes.string,
  borderRadius: PropTypes.number,
};

export default Image;
