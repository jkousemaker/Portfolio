-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2021 at 12:00 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `image` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `name`, `image`, `description`) VALUES
(1, 'CSS', 'C:\\xampp\\htdocs\\Portfolio\\assets\\CSS.png', 'Css is used for styling a web page.'),
(2, 'JavaScript', 'C:\\xampp\\htdocs\\Portfolio\\assets\\js.png', 'JavaScript is used for local scripts on a web page.'),
(3, 'PHP', 'C:\\xampp\\htdocs\\Portfolio\\assets\\phpp.png', 'PHP is used to communicate with a database.'),
(4, 'HTML', 'C:\\xampp\\htdocs\\Portfolio\\assets\\htmll.png', 'HTML is used for the lay out of a web page.');

-- --------------------------------------------------------

--
-- Table structure for table `language_rule`
--

CREATE TABLE `language_rule` (
  `id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Description` text NOT NULL,
  `Date` text NOT NULL,
  `Language` varchar(50) NOT NULL,
  `Img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `Name`, `Description`, `Date`, `Language`, `Img`) VALUES
(1, 'Portfolio', 'In the first year of the study Software Developer we had to make a portfolio website and this site is what I came up with. I\'m not happy with how it looks and works right now but I\'ll be rewriting the whole website this year!', '2020-2021', '', 'C:\\xampp\\htdocs\\Portfolio\\assets\\html.png'),
(2, 'Health One', 'Health One is a project about a website for a gym. We had to fix the whole code and add a database with phpmyadmin to then proceed to print the data out of the database on the website', '2021', '', ''),
(3, 'This page', 'We have to add a php page to the portfolio we made in the first year of this study.\r\nThis is what I\'ve come up with but I\'ll improve this once I\'ve rewritten my website.', '2021', '', 'C:\\xampp\\htdocs\\Portfolio\\assets\\php.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `language_rule`
--
ALTER TABLE `language_rule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `language_rule`
--
ALTER TABLE `language_rule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `language_rule`
--
ALTER TABLE `language_rule`
  ADD CONSTRAINT `language_rule_ibfk_1` FOREIGN KEY (`id`) REFERENCES `projects` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
