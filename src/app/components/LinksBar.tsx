import React from 'react'

const LinksBar = () => {
  return (
    <div className="flex flex-col gap-2 items-center ">
      <div className="flex gap-2 ">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://t.me/gepardoj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 24C0 37.3 10.7 48 24 48C37.3 48 48 37.3 48 24C48 10.7 37.3 0 24 0C10.7 0 0 10.7 0 24ZM19.6 35L20 28.9L31.1 18.9C31.6 18.5 31 18.3 30.3 18.6L16.6 27.3L10.7 25.4C9.4 25 9.4 24.1 11 23.5L34.1 14.6C35.2 14.1 36.2 14.9 35.8 16.5L31.9 35C31.6 36.3 30.8 36.6 29.7 36L23.7 31.6L20.8 34.4C20.5 34.7 20.2 35 19.6 35Z"
              fill="var(--accent-02)" />
          </svg>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:anna.ra.phoenix@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_14_20)">
              <circle cx="24" cy="24" r="24" fill="var(--accent-01)" />
              <path d="M31 24C31 27.8659 27.8659 31 24 31C20.134 31 17 27.8659 17 24C17 20.134 20.134 17 24 17C27.8659 17 31 20.134 31 24ZM31 24V26.625C31 29.0412 32.9588 31 35.375 31C37.7912 31 39.75 29.0412 39.75 26.625V24C39.75 15.3015 32.6986 8.25 24 8.25C15.3015 8.25 8.25 15.3015 8.25 24C8.25 32.6986 15.3015 39.75 24 39.75H31" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_14_20">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/gepardoj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M24.0141 0C18.2891 0.00257797 12.7598 2.08344 8.45344 5.85595C4.08725 9.68462 1.20515 14.9259 0.31075 20.6638C-0.603422 26.426 0.513884 32.3267 3.47135 37.3557C6.38553 42.325 10.9828 46.0864 16.4305 47.9588C17.6401 48.1868 18.0696 47.4236 18.0696 46.7732C18.0696 46.1852 18.0456 44.2484 18.036 42.194C11.3645 43.682 9.95814 39.2901 9.95814 39.2901C9.52415 37.8127 8.58026 36.537 7.29431 35.6901C5.11765 34.1613 7.4623 34.1997 7.4623 34.1997C8.22305 34.3053 8.95021 34.5909 9.58617 35.0301C10.2245 35.4693 10.7549 36.0525 11.1389 36.7341C11.4628 37.3413 11.902 37.8765 12.43 38.3061C13.2161 38.9568 14.1829 39.3507 15.1999 39.4348C16.2169 39.519 17.2353 39.2892 18.1176 38.7765C18.2256 37.5285 18.7656 36.3621 19.6415 35.4885C14.3163 34.8669 8.71262 32.7573 8.71262 23.3206C8.67599 20.8874 9.55971 18.5301 11.1869 16.7207C10.4525 14.597 10.5346 12.276 11.4173 10.2095C11.4173 10.2095 13.4307 9.54952 18.0144 12.7295C21.9415 11.6274 26.0962 11.6274 30.0233 12.7295C34.5974 9.54952 36.5989 10.2095 36.5989 10.2095C37.4868 12.2687 37.5732 14.5967 36.8413 16.7207C38.4677 18.5302 39.3498 20.8878 39.3107 23.3206C39.3107 32.7741 33.6975 34.8525 28.3578 35.4597C28.934 36.0615 29.3769 36.778 29.6576 37.5624C29.9384 38.3469 30.0507 39.1817 29.9873 40.0125C29.9873 43.3052 29.9585 45.9572 29.9585 46.766C29.9585 47.4188 30.3905 48.1868 31.6072 47.9468C37.0449 46.0657 41.631 42.3025 44.5376 37.3365C47.4892 32.3115 48.603 26.417 47.6886 20.6614C46.7934 14.9287 43.9142 9.69229 39.5531 5.86555C35.2543 2.095 29.7344 0.0110434 24.0165 0H24.0141Z"
              fill="var(--accent-02)" />
          </svg>
        </a>
      </div>
      <a
        className="row-span-2"
        href="mailto:anna.ra.phoenix@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >anna.ra.phoenix@gmail.com</a>
    </div>
  )
}

export default LinksBar
