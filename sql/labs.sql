-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2025 a las 18:45:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `labs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona2`
--

CREATE TABLE `persona2` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `persona2`
--

INSERT INTO `persona2` (`id`, `nombre`) VALUES
(4, 'Arsene'),
(5, 'kushinada'),
(6, 'Jinete blanco'),
(7, 'Izanagui'),
(8, 'Satan'),
(9, 'pixie'),
(10, 'Oni'),
(11, 'Ukobach'),
(12, 'Arsene');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona4`
--

CREATE TABLE `persona4` (
  `id` int(11) NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `persona4`
--

INSERT INTO `persona4` (`id`, `url`) VALUES
(1, 'https://preview.redd.it/a3598fe3gvjb1.jpg?auto=webp&s=86d8426a71cfb9d969742bbaef79da2e77ce6ec1'),
(2, 'https://personaspain.es/wp-content/uploads/2023/01/Persona-4-Golden-Screenshot_1.webp'),
(3, 'https://images.rpgsite.net/image/da49c9a1/116400/original/persona-4-golden-true-ending-how-to-get-unlock-all-endings.jpg'),
(4, 'https://preview.redd.it/a3598fe3gvjb1.jpg?auto=webp&s=86d8426a71cfb9d969742bbaef79da2e77ce6ec1'),
(5, 'https://personaspain.es/wp-content/uploads/2023/01/Persona-4-Golden-Screenshot_1.webp'),
(6, 'https://preview.redd.it/a3598fe3gvjb1.jpg?auto=webp&s=86d8426a71cfb9d969742bbaef79da2e77ce6ec1'),
(7, 'https://preview.redd.it/a3598fe3gvjb1.jpg?auto=webp&s=86d8426a71cfb9d969742bbaef79da2e77ce6ec1'),
(8, 'https://images.rpgsite.net/image/da49c9a1/116400/original/persona-4-golden-true-ending-how-to-get-unlock-all-endings.jpg'),
(9, 'https://images.rpgsite.net/image/da49c9a1/116400/original/persona-4-golden-true-ending-how-to-get-unlock-all-endings.jpg'),
(10, 'https://images.rpgsite.net/image/da49c9a1/116400/original/persona-4-golden-true-ending-how-to-get-unlock-all-endings.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona5`
--

CREATE TABLE `persona5` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `persona5`
--

INSERT INTO `persona5` (`id`, `nombre`, `fecha`) VALUES
(1, 'Shibuya', '2025-03-09 18:36:01'),
(2, 'Akihabara', '2025-03-09 19:26:23'),
(3, 'Shibuya', '2025-03-09 18:39:54'),
(4, 'Shibuya', '2025-03-09 18:42:11'),
(5, 'Yongen yaja', '2025-03-09 18:42:25'),
(6, 'Akihabara', '2025-03-09 18:43:53'),
(7, 'Shibuya', '2025-03-09 18:45:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `persona2`
--
ALTER TABLE `persona2`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona4`
--
ALTER TABLE `persona4`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona5`
--
ALTER TABLE `persona5`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `persona2`
--
ALTER TABLE `persona2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `persona4`
--
ALTER TABLE `persona4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `persona5`
--
ALTER TABLE `persona5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
