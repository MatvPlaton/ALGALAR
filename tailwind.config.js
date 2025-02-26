module.exports = {
    theme: {
      extend: {
        animation: {
          'slide-down-up': 'slideDownUp 3s ease-in-out',
        },
        keyframes: {
          slideDownUp: {
            '0%': {
              transform: 'translate(-50%, -100%)', // Начальное положение выше экрана
              opacity: '0',
            },
            '10%': {
              transform: 'translate(-50%, 0)', // Спустился на место
              opacity: '1',
            },
            '90%': {
              transform: 'translate(-50%, 0)', // Держится на месте
              opacity: '1',
            },
            '100%': {
              transform: 'translate(-50%, -100%)', // Уходит наверх
              opacity: '0',
            },
          },
        },
      },
    },
    plugins: [],
  };
  