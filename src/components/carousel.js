import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const MovieSlider = ({ movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="mx-auto">
        {movies.map((movie) => (
          <div key={movie.id} className="px-2">
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-md shadow-md"
            />
            <h3 className="text-sm mt-2">{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default function Home() {
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      image: 'https://via.placeholder.com/200x300.png',
    },
    {
      id: 2,
      title: 'Movie 2',
      image: 'https://via.placeholder.com/200x300.png',
    },
    {
      id: 3,
      title: 'Movie 3',
      image: 'https://via.placeholder.com/200x300.png',
    },
    {
      id: 4,
      title: 'Movie 4',
      image: 'https://via.placeholder.com/200x300.png',
    },
    {
      id: 5,
      title: 'Movie 5',
      image: 'https://via.placeholder.com/200x300.png',
    },
    {
      id: 6,
      title: 'Movie 6',
      image: 'https://via.placeholder.com/200x300.png',
    },
    {
      id: 7,
      title: 'Movie 7',
      image: 'https://via.placeholder.com/200x300.png',
    },
    {
      id: 8,
      title: 'Movie 8',
      image: 'https://via.placeholder.com/200x300.png',
    },
    {
      id: 9,
      title: 'Movie 9',
      image: 'https://via.placeholder.com/200x300.png',
    },
    {
      id: 10,
      title: 'Movie 10',
      image: 'https://via.placeholder.com/200x300.png',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4"></h1>
        <MovieSlider movies={movies} />
      </div>
    </div>
  );
}
