[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/leticiabernardo/WeatherApp">
    <img src="https://user-images.githubusercontent.com/13439423/156508028-1ff3a038-48bb-43bc-87b4-6361e9e9c170.png" width="100" /> 
  </a>

  <h3 align="center">Weather app</h3>

  <p align="center">
    Search the weather forecast for the next days for anywhere in the world.
    <br />
    <i>This project is a test that uses the experimental features of Vite SSR.</i>
    <br />
    <a href="https://github.com/leticiabernardo/WeatherApp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#getting-the-api-keys">Getting the API Keys</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


## About The Project
![Screen Shot 2022-03-03 at 04 19 41](https://user-images.githubusercontent.com/13439423/156516110-d73b63ff-7811-4be7-bfec-55a093605f18.png)

Check the current and upcoming weather from anywhere in the world.

Features:

- Show weathers for your current location;
- Show weathers searched by the search field;
- Show background of searched city, state or country;
- Detected your language and can be changed to english or portuguese;
- The weather forecasts can be viewed in celsius or fahrenheit;
- Full responsive.



## Getting Started

1 - Clone the repo
```
git clone https://github.com/leticiabernardo/WeatherApp.git
```
Enter the project folder
```
cd WeatherApp
```

2 - Install packages
```
yarn install
```

3 - Setting your api keys

Rename the file `.env.sample` to `.env`
```
OPENWEATHER_KEY="ENTER YOUR API"
OPENCAGE_KEY="ENTER YOUR API"
BING_KEY="ENTER YOUR API"
```

4 - Run the application in a development environment
```
yarn dev:server
```

5 - Run the tests
```
yarn test | coverage
```

## Getting the API Keys

Get the api keys:
- [Open Weather Map](https://openweathermap.org/)
- [Open Cage Data](https://opencagedata.com/)
- [Bing](https://www.microsoft.com/en-us/bing/apis/pricing)


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/leticiabernardo/WeatherApp.svg?style=for-the-badge
[contributors-url]: https://github.com/leticiabernardo/WeatherApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/leticiabernardo/WeatherApp.svg?style=for-the-badge
[forks-url]: https://github.com/leticiabernardo/WeatherApp/network/members
[stars-shield]: https://img.shields.io/github/stars/leticiabernardo/WeatherApp.svg?style=for-the-badge
[stars-url]: https://github.com/leticiabernardo/WeatherApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/leticiabernardo/WeatherApp.svg?style=for-the-badge
[issues-url]: https://github.com/leticiabernardo/WeatherApp/issues
[license-shield]: https://img.shields.io/github/license/leticiabernardo/WeatherApp.svg?style=for-the-badge
[license-url]: https://github.com/leticiabernardo/WeatherApp/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lebernardo
