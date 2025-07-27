function changeTimeTheme() {
  const hour = new Date().getHours();
  const background = document.getElementById('background');
  const root = document.documentElement;
  let imagePath = '';
  let textColor = '';
  if (hour >= 6 && hour < 18) {
    textColor = '#000000';
  } else {
    textColor = '#ffffff';
  }
  if (hour >= 0 && hour < 2) imagePath = 'img/0-2.png';
  else if (hour >= 2 && hour < 4) imagePath = 'img/2-4.png';
  else if (hour >= 4 && hour < 6) imagePath = 'img/4_6.png';
  else if (hour >= 6 && hour < 8) imagePath = 'img/6-8.png';
  else if (hour >= 8 && hour < 10) imagePath = 'img/8_10.png';
  else if (hour >= 10 && hour < 12) imagePath = 'img/10_12.png';
  else if (hour >= 12 && hour < 14) imagePath = 'img/12_14.png';
  else if (hour >= 14 && hour < 16) imagePath = 'img/14_16.png';
  else if (hour >= 16 && hour < 18) imagePath = 'img/16_18.png';
  else if (hour >= 18 && hour < 20) imagePath = 'img/18_20.png';
  else if (hour >= 20 && hour < 22) imagePath = 'img/20_22.png';
  else imagePath = 'img/22_0.png';
  background.style.backgroundImage = `url('${imagePath}')`;
  root.style.setProperty('--card-text-color', textColor);
}
changeTimeTheme();
setInterval(changeTimeTheme, 60 * 1000);
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
//Special Thanks to https://steamcommunity.com/profiles/76561198026652761 for creating the pictures used for the background and love for steamwallpaper engine for showing this