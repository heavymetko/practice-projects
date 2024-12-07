export default function Footer() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-5 '>
        <button>
          <svg
            className='border rounded-full fill-custom-blue hover:scale-110'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 48 48'
            width='36px'
            height='36px'
          >
            <path
              fill='#fff'
              d='M24,5C13.5,5,5,13.5,5,24s8.5,19,19,19s19-8.5,19-19S34.5,5,24,5z'
            />
            <path d='M21.2,20.7V24h-4.7v5h4.7v13.7C22.1,42.9,23,43,24,43c0.9,0,1.7-0.1,2.6-0.2V29h4.9l0.8-5h-5.7v-2.7	c0-2.1,0.7-3.9,2.6-3.9h3.1V13c-0.5-0.1-1.7-0.2-3.9-0.2C23.8,12.8,21.2,15.2,21.2,20.7z' />
          </svg>
        </button>
        <button>
          <svg
            className='border rounded-full fill-custom-blue hover:scale-110'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 48 48'
            width='36px'
            height='36px'
          >
            <path
              fill='#fff'
              d='M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z'
            />
            <path d='M36,17.1c-0.9,0.4-2,0.8-3,0.9c1-0.6,2.6-1.9,3-3c-1,0.6-2.7,1.2-3.8,1.4C31.3,15.4,30,15,28.6,15	c-2.7,0-4.6,2.3-4.6,5v2c-4,0-7.9-3-10.3-6c-0.4,0.7-0.7,1.6-0.7,2.5c0,1.8,1.7,3.7,3,4.5c-0.8,0-2.3-0.6-3-1c0,0,0,0,0,0.1	c0,2.4,1.7,4,3.9,4.4C16.5,26.6,16,27,14.1,27c0.6,1.9,3.8,3,5.9,3c-1.7,1.3-4.7,2-7,2c-0.4,0-0.6,0-1,0c2.2,1.4,5.2,2,8,2	c9.1,0,14-6.9,14-13.4c0-0.2,0-0.9,0-1.1C35,18.8,35.3,18.1,36,17.1' />
          </svg>
        </button>
        <button>
          <svg
            className='border rounded-full p-2 stroke-custom-blue hover:scale-110'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 50 50'
            width='36px'
            height='36px'
          >
            <path
              d='M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z'
              strokeWidth='3'
            />
          </svg>
        </button>
      </div>
      <p className='text-xs my-5 text-custom-gray'>
        &copy; Copyright Ping. All rights reserved.
      </p>
    </div>
  );
}
