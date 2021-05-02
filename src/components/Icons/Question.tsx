import { FC } from 'react';

const Question: FC<{ width?: number; height?: number }> = ({
  width = 20,
  height = 20,
  ...props
}) => (
  <svg
    width={width}
    height={width}
    viewBox='0 0 100 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M60.245 3.122c10.429 2.21 19.863 7.88 26.61 15.993 7.653 9.203 11.074 18.644 11.108 30.656.06 22.003-14.608 41.238-35.621 46.712-6.516 1.697-18.177 1.76-24.294.13-13.234-3.523-25.773-13.96-31.397-26.13-16.808-36.381 14.443-75.66 53.594-67.361zm-16.436 9.56c-5.522.798-14.036 4.68-18.493 8.43C9.132 34.73 7.776 60.278 22.42 75.76c20.085 21.237 55.187 13.238 63.764-14.53C94.54 34.174 72.195 8.574 43.809 12.68zm13.25 12.386c7.419 3.37 12.208 12.806 10.196 20.091-1.83 6.628-15.443 16.09-19.482 13.542-4.399-2.774-3.639-7.395 1.605-9.76 7.915-3.569 9.982-7.986 5.939-12.688-3.8-4.416-11.772-2.42-13.623 3.41-.666 2.1-4.166 3.005-6.592 1.706-4.073-2.18-3.033-7.73 2.417-12.91 5.2-4.942 13.104-6.314 19.54-3.39zm-3.65 44.074c3.283 3.629-1.706 8.533-5.779 5.68-3.484-2.44-1.686-7.367 2.72-7.451.786-.014 2.163.782 3.059 1.771z'
      fill='#fff'
    />
  </svg>
);

export { Question };