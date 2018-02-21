import React from 'react';

export const Ok = () =>
  <svg fill="rgb(130,199,165)" height="24" viewBox="0 0 24 24" >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>;

export const Not = () =>
  <svg fill="rgb(215,105,110)" height="24" viewBox="0 0 24 24" >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>;

export const Face = () =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <defs>
      <clipPath>
        <path d="m666.82 463.14c0-6.133 4.972-11.11 11.11-11.11 6.134 0 11.11 4.973 11.11 11.11 0 6.134-4.972 11.11-11.11 11.11-6.134 0-11.11-4.972-11.11-11.11" />
      </clipPath>
      <clipPath>
        <path d="m0 600h800v-600h-800v600" />
      </clipPath>
      <clipPath>
        <path d="m606.53 445.91c0-6.133 4.972-11.11 11.11-11.11 6.133 0 11.11 4.973 11.11 11.11 0 6.134-4.973 11.11-11.11 11.11-6.134 0-11.11-4.972-11.11-11.11" />
      </clipPath>
      <linearGradient id="0" x1="488.2" y1="547.74" x2="488.11" y2="537.68" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffeb96" />
        <stop offset="1" stopColor="#fff1b7" />
      </linearGradient>
    </defs>
    <g transform="matrix(4.36363 0 0 4.36363-2113.66-2253.55)">
      <g transform="translate(1.612-20.413)">
        <circle cx="488.27" cy="542.35" r="5.5" fill="url(#0)" />
        <g fill="#414141"><circle r=".6" cy="542.3" cx="485.18" />
          <circle r=".6" cy="542.3" cx="491.35" />
        </g>
      </g>
      <g transform="translate(-6.818-.4)">
        <path d="m499.05 523.96c0 .07.783.139.779.207-.11 1.575-1.461 2.821-3.116 2.827-1.648.006-3.01-1.222-3.135-2.788-.006-.074.305-.15.304-.225l2.82-.022z" fill="#f7aa86" />
        <path d="m493.66 523.64h6.077c.049 0 .088.039.088.088v.385c0 .049-.001.206-.001.206h-6.234c0 0-.001-.157-.001-.206v-.385c0-.049.039-.088.088-.088" fill="#f3f3f3" />
      </g></g></svg>;
