
var images = 0;
var quotes = 0;
imagescarousel();
quotescarousel();

function imagescarousel()
{
  var i;
  var x = document.getElementsByClassName("images-slideshow");
  for (i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }
  images++;
  if (images > x.length)
  {
    images = 1
  }
  x[images-1].style.display = "block";
  setTimeout(imagescarousel, 4000);
}

function quotescarousel()
{
  var i;
  var x = document.getElementsByClassName("quotes-slideshow");
  for (i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }
  quotes++;
  if (quotes > x.length)
  {
    quotes = 1
  }
  x[quotes-1].style.display = "block";
  setTimeout(quotescarousel, 4000);
}
