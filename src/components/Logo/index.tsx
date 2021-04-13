import React from "react";
type LogoProps = {
  className?: string;
  onClick?: () => void;
};
export const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="103"
      height="55"
      viewBox="0 0 103 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.8127 2.43619C21.6687 2.43619 17.4666 6.69875 15.7092 15.1054L10.3443 40.6864C8.59009 49.1683 10.9462 55 19.7849 55C28.6936 55 31.4166 49.8789 33.2401 41.3057L38.4979 16.7506C40.3905 7.97583 36.9094 2.43619 28.8127 2.43619ZM31.8954 15.4855L26.2626 41.9507C25.2415 46.5917 23.7625 49.2235 20.5003 49.2235C16.6868 49.2235 16.0326 46.2012 17.0039 41.7362L22.6367 15.1334C23.5677 10.6436 25.2374 8.2663 28.214 8.2663C31.8898 8.2663 32.8417 11.0293 31.8954 15.4855Z"
        fill="#FFFFFF"
      />
      <path
        d="M50.4957 17.7676C48.2715 17.7676 46.8488 18.6943 45.6997 20.0882L48.2675 8.26311H43.4909L36.9657 38.8076C36.3018 41.8275 35.8311 44.352 35.4448 46.0668H40.0508C40.309 45.2518 40.5201 44.4228 40.6833 43.5839C41.1187 45.089 42.2195 46.4725 44.8468 46.4725C49.4335 46.4725 51.2923 42.6852 52.4535 37.26L54.7066 26.7169C55.8895 21.0852 54.5046 17.7676 50.4957 17.7676ZM50.0233 26.4264L47.6793 37.252C46.885 40.9977 45.7995 42.2844 44.0236 42.2844C41.7841 42.2844 41.3311 40.4696 42.0304 37.2032L44.1346 27.1674C44.8049 23.9962 45.744 21.7605 48.1653 21.7605C50.4756 21.7605 50.6148 23.625 50.0233 26.4264Z"
        fill="#FFFFFF"
      />
      <path
        d="M64.5882 23.4577C58.2625 23.4577 57.2704 27.7899 56.5067 31.3235L56.4134 31.7476H61.1345L61.3187 30.9882C61.8691 28.7789 62.3149 27.245 64.1842 27.245C66.0535 27.245 66.3746 28.6269 65.8797 30.8842L65.075 34.6034C64.6936 34.6562 64.3508 34.7114 63.9855 34.7635C57.449 35.7725 54.2817 37.5185 52.9073 43.8311C51.9956 48.1193 52.7102 52.189 56.9895 52.189C59.2201 52.189 60.6315 51.4296 61.9721 49.4035C61.8112 50.2381 61.6841 51.1559 61.6124 51.7561H66.2579C66.3826 50.8183 67.1237 47.3311 67.5341 45.3338L70.6322 30.7009C71.564 26.3 69.8307 23.4577 64.5882 23.4577ZM63.6451 41.5762C62.735 45.862 61.6446 48.0072 59.4052 48.0072C57.3017 48.0072 57.2036 45.882 57.7009 43.6503C58.5055 40.2055 60.1737 39.1925 63.4318 38.5291L64.346 38.3691L63.6451 41.5762Z"
        fill="#FFFFFF"
      />
      <path
        d="M85.0996 17.7428C82.8464 17.7428 81.0826 18.7447 79.915 20.3834L82.5004 8.24229H77.7246L69.656 46.042H74.4334L78.5019 27.1097C79.2543 23.673 80.2175 21.7349 82.5254 21.7349C84.7536 21.7349 84.8179 23.4033 84.2957 25.8383L79.9858 46.042H84.76L89.2904 24.9092C90.149 20.9139 89.1729 17.7428 85.0996 17.7428Z"
        fill="#FFFFFF"
      />
      <path
        d="M92.9687 41.7338L103 6.90279H95.1599L89.3831 41.7338H92.9687Z"
        fill="#FFEC59"
      />
      <path
        d="M90.5996 44.2624C89.5069 44.2624 88.4238 44.6121 87.3503 45.3114C86.2769 46.0084 85.6138 46.9566 85.3716 48.1457C85.0899 49.3403 85.3217 50.2837 86.0741 50.9855C86.8265 51.6873 87.7406 52.0257 88.839 52.0257C89.3959 52.0214 89.9485 51.9282 90.4757 51.7497C91.0368 51.5683 91.5696 51.3097 92.0585 50.9815C92.5503 50.644 92.9817 50.227 93.3348 49.7476C93.691 49.2712 93.9382 48.7231 94.059 48.1417C94.306 46.9526 94.0485 46.0044 93.3018 45.3074C92.5739 44.6199 91.6034 44.2446 90.5996 44.2624Z"
        fill="#FFEC59"
      />
      <path
        d="M3.35218 0.000400141C2.66659 0.000400141 1.98717 0.21965 1.31391 0.658148C0.643608 1.09425 0.224366 1.69038 0.0722806 2.43615C-0.103946 3.18512 0.0417025 3.77725 0.513249 4.21495C0.984795 4.65265 1.55934 4.87029 2.24735 4.87029C2.59677 4.86764 2.94347 4.80901 3.27413 4.69666C3.62535 4.58295 3.95879 4.4208 4.2647 4.21495C4.57447 4.00444 4.84648 3.74368 5.06939 3.44357C5.29339 3.14478 5.4491 2.80097 5.52564 2.43615C5.68095 1.69038 5.51921 1.09585 5.05088 0.658148C4.5937 0.225233 3.98338 -0.011089 3.35218 0.000400141Z"
        fill="#FFEC59"
      />
      <path
        d="M10.9123 3.55005C9.5588 3.55005 8.21766 3.97441 6.88885 4.82314C5.55951 5.67053 4.73873 6.82359 4.43858 8.26391C4.08935 9.71384 4.37742 10.8589 5.30845 11.7127C6.23947 12.5665 7.37327 12.9794 8.73319 12.9794C9.42257 12.9741 10.1068 12.8613 10.761 12.6449C11.4544 12.4252 12.114 12.1115 12.7212 11.7127C13.3279 11.3049 13.8618 10.7991 14.3008 10.2163C14.7422 9.64077 15.0497 8.97505 15.2013 8.26711C15.5079 6.82679 15.1892 5.67133 14.2638 4.82634C13.3384 3.98135 12.2175 3.55005 10.9123 3.55005Z"
        fill="#FFEC59"
      />
      <rect x="0.5" y="0.5" width="102" height="54" stroke="transparent" />
    </svg>
  );
};