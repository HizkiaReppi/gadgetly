const CartIcon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M28.3337 30.5C29.2177 30.5 30.0656 30.8512 30.6907 31.4763C31.3158 32.1014 31.667 32.9493 31.667 33.8333C31.667 34.7174 31.3158 35.5652 30.6907 36.1904C30.0656 36.8155 29.2177 37.1667 28.3337 37.1667C27.4496 37.1667 26.6018 36.8155 25.9766 36.1904C25.3515 35.5652 25.0003 34.7174 25.0003 33.8333C25.0003 31.9833 26.4837 30.5 28.3337 30.5ZM1.66699 3.83334H7.11699L8.68366 7.16668H33.3337C33.7757 7.16668 34.1996 7.34227 34.5122 7.65483C34.8247 7.96739 35.0003 8.39132 35.0003 8.83334C35.0003 9.11668 34.917 9.40001 34.8003 9.66668L28.8337 20.45C28.267 21.4667 27.167 22.1667 25.917 22.1667H13.5003L12.0003 24.8833L11.9503 25.0833C11.9503 25.1938 11.9942 25.2998 12.0724 25.378C12.1505 25.4561 12.2565 25.5 12.367 25.5H31.667V28.8333H11.667C10.7829 28.8333 9.93509 28.4821 9.30997 27.857C8.68485 27.2319 8.33366 26.3841 8.33366 25.5C8.33366 24.9167 8.48366 24.3667 8.73366 23.9L11.0003 19.8167L5.00033 7.16668H1.66699V3.83334ZM11.667 30.5C12.551 30.5 13.3989 30.8512 14.024 31.4763C14.6491 32.1014 15.0003 32.9493 15.0003 33.8333C15.0003 34.7174 14.6491 35.5652 14.024 36.1904C13.3989 36.8155 12.551 37.1667 11.667 37.1667C10.7829 37.1667 9.93509 36.8155 9.30997 36.1904C8.68485 35.5652 8.33366 34.7174 8.33366 33.8333C8.33366 31.9833 9.81699 30.5 11.667 30.5ZM26.667 18.8333L31.3003 10.5H10.2337L14.167 18.8333H26.667Z"
        fill="black"
      />
    </svg>
  );
};

export default CartIcon;