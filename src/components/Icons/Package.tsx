import { Icon } from './interface';

const Package: Icon = ({
  width = 20,
  height = 20,
  color = 'white',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 100 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M73.227 10.409C83.3 14.98 92.862 19.521 94.476 20.502c5 3.036 5.35 5.005 5.347 30.049-.003 20.748-.135 22.7-1.703 25.271-2.283 3.744-2.826 4.052-25.23 14.272C59.177 96.35 52.39 99 50.085 99c-4.342 0-41.87-16.966-46.19-20.88L.845 75.352.586 51.334C.31 25.434.564 23.669 5.004 20.761 7.873 18.883 43.141 2.753 46.192 1.924c4.505-1.224 8.196-.066 27.035 8.485zm-29.86 1.015c-2.993 1.34-5.65 2.644-5.902 2.898-.557.556 33.866 16.417 35.632 16.417 2.122 0 12.942-5.42 12.184-6.102-1.31-1.182-33.92-15.7-35.207-15.676-.696.013-3.714 1.121-6.707 2.463zM19.663 22.108c-3.187 1.467-5.253 2.893-4.796 3.31 1.295 1.183 34.007 15.786 35.359 15.786.678 0 3.973-1.318 7.321-2.929l6.087-2.929-3.052-1.33c-1.679-.73-9.617-4.318-17.642-7.972-8.024-3.653-15.284-6.614-16.133-6.578-.85.036-4.064 1.224-7.144 2.642zM8.46 52.317l.233 20.705 18.314 8.49c10.073 4.667 18.61 8.497 18.968 8.508.36.011.655-9.153.655-20.367 0-15.27-.274-20.602-1.09-21.245-1.142-.899-36.007-16.797-36.837-16.797-.262 0-.372 9.317-.243 20.706zm64.768-12.742c-9.593 4.36-17.932 8.324-18.532 8.809-.816.66-1.09 6.012-1.09 21.27 0 11.213.194 20.387.431 20.387 1.334 0 36.648-16.755 37.224-17.662.88-1.385.94-40.774.063-40.75-.36.01-8.503 3.585-18.096 7.946z'
      fill={color}
    />
  </svg>
);

export { Package };
