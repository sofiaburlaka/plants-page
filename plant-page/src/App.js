import React from 'react';
import './App.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SpaIcon from '@mui/icons-material/Spa';

function App () {
  return (
    <div class='plants-container'>
    <div class='pl-head'>
      <div class='pl-navv'>
        <ul class='pl-ul'>
          <li class='pl-li kr'>Plants</li>
          <li class='pl-li'>Pots</li>
          <li class='pl-li'>Sale</li>
          <li class='pl-li'>Subscriptions</li>
          <li class='pl-li rk'>Care</li>
        </ul>
        <div class='kotik'>
          <label class='cool-label' for="menu-toggle">Menu</label>
          <input type="checkbox" id="menu-toggle" />
          <ul id="menu">
            <li><a class='cool-menu-a' href="#">Plants</a></li>
            <li><a class='cool-menu-a' href="#">Pots</a></li>
            <li><a class='cool-menu-a' href="#">Sale</a></li>
            <li><a class='cool-menu-a' href="#">Care</a></li>
            <li><a class='cool-menu-a' href="#">Subscriptions</a></li>
            <li><a class='cool-menu-a' href="#">Log In</a></li>
          </ul>
        </div>
        <SpaIcon style={{fontSize: 60}} />
        <div class='pl-log-in'>
          <div class='login-pl'>
            <AccountCircleIcon style={{fontSize: 30}} />
            <p class='pl-text'>Log In</p>
          </div>
          <div class='pl-search'>
            <input type="text" placeholder="Search.." class='pl-search-field' />
          </div>
          <div class='pl-cart'>
            <ShoppingCartOutlinedIcon style={{fontSize: 40, cursor:'pointer'}} />
            <p class='pl-text cart-pl'>Cart 0</p>
          </div>
        </div>
      </div>
      <div class='pl-main-text'>
        <p class='pl-largetext-main'>
          Is There Such a Thing as  
          <br /> 
          Too Many Plants?
        </p>
        <p class='pl-smalltext-main'>Discover the latest addition to your growing plant collection</p>
        <button class='pl-btn' type='button'>Shop Plants</button>
      </div>
    </div>
    <div class='pl-new-ar'>
      <div class='new-arrivals-bl'>
        <p class='new-ar-text'>New Arrivals</p>
        <button class='new-ar-btn' type='button'>Shop All</button>
      </div>
      <ul class='new-ar-cards'>
        <li class='pots-card'>
          <div class='img-pl'></div>
          {/* <img class='pots-img' alt='' src={require('./img/plants/c837a6_2ec4d5d6e54e4e8bb975fb947cf144f8_mv2.webp')}></img> */}
          <p class='pots-name'>Ficus lyrata</p>
          <p class='pots-price'>$35.99</p>
          <button type='button' class='pots-btn'>Add to Cart</button>
        </li>
        <li class='pots-card'>
          <div class='img-pl pl-s'></div>
          {/* <img class='pots-img' alt='' src={require('./img/plants/c837a6_73448bed37134a569fa949ecb0d1b380_mv2.webp')}></img> */}
          <p class='pots-name'>Rusty Flowerpot</p>
          <p class='pots-price'>$20.99</p>
          <button type='button' class='pots-btn'>Add to Cart</button>
        </li>
        <li class='pots-card'>
          <div class='img-pl pl-th'></div>
          {/* <img class='pots-img' alt='' src={require('./img/plants/c837a6_40132b6cfe454894a25d1438c6661865_mv2.webp')}></img> */}
          <p class='pots-name'>Cactus</p>
          <p class='pots-price'>$19.99</p>
          <button type='button' class='pots-btn'>Add to Cart</button>
        </li>
        <li class='pots-card'>
          <div class='img-pl pl-fo'></div>
          {/* <img class='pots-img last-pl' alt='' src={require('./img/plants/c837a6_9cd11fa6ce854be496aa3f3ece28fddc_mv2.webp')}></img> */}
          <p class='pots-name'>Wooden Basket</p>
          <p class='pots-price'>$28.99</p>
          <button type='button' class='pots-btn'>Add to Cart</button>
        </li>
      </ul>
    </div> 
    <div class='pl-discover'>
      <p class='pl-small-categ'>Shop by Category</p>
      <p class='pl-large-categ'>Discover Sprout</p>
      <div class='pl-gallery'>
        <img class='big-pl-img' alt='' src={require('./img/plants/c837a6_384e963be55f4ae993ff8c40185febd2_mv2.webp')}></img>
        <div class='block-gallery'>
          <img class='small-pl-img' alt='' src={require('./img/plants/c837a6_7eaf5dfbcb9e4c50998eee1eaf536fef_mv2.webp')}></img>
          <img class='small-pl-img' alt='' src={require('./img/plants/c837a6_ff45879fbb6a4ce5a1399f2d43dab04e_mv2.webp')}></img>
        </div>
      </div> 
    </div>
    <div class='pl-from-seed'>
      <p class='pl-from-seed-text'>From Seed to Sprout</p>
      <p class='pl-from-small'>I`m a paragraph. Click here to add your own text and edit me. It`s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      <button class='pl-btn our-st-btn' type='button'>Our Story</button>
    </div>
    <div class='pl-shop-our'>
      
      <img class='pl-our-img' alt='' src={require('./img/plants/c837a6_da275ddca21a4a899282b38f6945d118_mv2.webp')}></img>
      <div class='pl-orenge-block'>
        <p class='pl-boxes-text'>
          Shop Our Plant 
          <br /> 
          Subscription Boxes
        </p>
        <p class='pl-small-boxes'>and look forward to a new plant every month</p>
        <div class='pl-cactus-box'>
          <img class='pl-cactus' alt='' src={require('./img/plants/photo_2022-10-03_16-00-49.jpg')}></img>
          <p class='cactus-text'>
            Cactus Lover 
            <br /> 
            Subscription
          </p>
        </div>
        <div class='pl-exotic-box'>
          <img class='pl-cactus' alt='' src={require('./img/plants/photo_2022-10-03_16-04-45.jpg')}></img>
          <p class='cactus-text'>
            Exotic Plants
            <br /> 
            Subscription
          </p>
        </div>
        <button class='pl-btn boxes-btn' type='button'>Subscription Boxes</button>
      </div>
    </div>
    <div class='pl-our-blog'>
      <p class='pl-text-bl'>Our Blog</p>
      <div class='new-arrivals-bl'>
        <p class='new-ar-text'>Your Guide to Plant Care</p>
        <button class='new-ar-btn' type='button'>Read More</button>
      </div>
      <div class='pl-cards-block'>
        <div class=' pl-card'>
          <img class='pl-box-img' alt='' src={require('./img/plants/c837a6_326af6b8497c48cda62de734820ce3a5_mv2.webp')}></img>
          <p class='pl-may'>May 30 - 1 min</p>
          <p class='pl-report-txt'>How to Report Plants</p>
          <p class='pl-report-small'>
            Create a blog post subtitle that summarizes your post in a few 
            <br /> 
            short, punchy sentences and entices your audience to 
            <br /> 
            continue reading....
          </p>
          <hr class='pl-hr' />
          <div class='pl-icons'>
            <VisibilityIcon class='pl-icon' />
            <ChatBubbleIcon class='pl-icon pl-message' />
            <FavoriteBorderIcon class='pl-icon pl-heart-icon' />
          </div>
        </div>
        <div class=' pl-card'>
          <img class='pl-box-img' alt='' src={require('./img/plants/c837a6_b87afed311cf43df9e68152e2e8e9805_mv2.webp')}></img>
          <p class='pl-may'>May 30 - 2 min</p>
          <p class='pl-report-txt'>How to Treat Leaf Spots</p>
          <p class='pl-report-small'>
            Create a blog post subtitle that summarizes your post in a few 
            <br /> 
            short, punchy sentences and entices your audience to 
            <br /> 
            continue reading....
          </p>
          <hr class='pl-hr' />
          <div class='pl-icons'>
            <VisibilityIcon class='pl-icon' />
            <ChatBubbleIcon class='pl-icon pl-message' />
            <FavoriteBorderIcon class='pl-icon pl-heart-icon' />
          </div>
        </div>
        <div class=' pl-card'>
          <img class='pl-box-img pl-last-ca' alt='' src={require('./img/plants/c837a6_92ec7628e3d9495ea43e2bb1f041c3e9_mv2.webp')}></img>
          <p class='pl-may'>May 30 - 1 min</p>
          <p class='pl-report-txt pl-last-text'>Keep Them Alive Through the Seasons</p>
          <p class='pl-report-small'>
            Create a blog post subtitle that summarizes your post in a few 
            <br /> 
            short, punchy sentences and entices your audience to 
            <br /> 
            continue reading....
          </p>
          <hr class='pl-hr pl-last-hr' />
          <div class='pl-icons'>
            <VisibilityIcon class='pl-icon' />
            <ChatBubbleIcon class='pl-icon pl-message' />
            <FavoriteBorderIcon class='pl-icon pl-heart-icon' />
          </div>
        </div>
      </div>
    </div>
    <div class='pl-green-block'>
      <p class='pl-green-text'>Sprout on the #Gram</p>
      <div class='pl-feeds'>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/01.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/02.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/03.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/04.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/05.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
      </div>
      <div class='pl-feeds'>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/06.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/07.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/08.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/09.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
        <div class='kit'>
          <img class='pl-card-img' alt='' src={require('./img/plants/10.jpg')}></img>
          <p class='pl-hover-d'>#website</p>
        </div>
      </div>
      <button class='pl-btn our-st-btn load-m-btn' type='button'>Load More</button>
    </div>
    <div class='pl-form-block'>
      <p class='pl-promise'>
        Everything You Need to Know
        <br /> 
        About Plants and More. No Spam,
        <br />
        We Promise.
      </p>
      <p class='pl-subscribe'>Subscribe now and get 15% off your first purchase</p>
      <label class='pl-enter' for="fname">Enter your email here*</label>
      <form class='pl-form'>
        <input class='pl-input' type="text" id="fname" name="fname" />
        <input class='pl-submit' type="submit" value="Subscribe"></input>
      </form>
    </div>
    <div class='pl-footer'>
      <SpaIcon style={{fontSize: 60}} />
      <hr class='pl-f-hr' />
      <div class='pl-footer-nav'>
        <ul class='pl-ul-f'>
          <h2 class='pl-h2-f'>Contact</h2>
          <li class='pl-f-li'>Address: 500 Terry</li>
          <li class='pl-f-li'>Francois Sreet</li>
          <li class='pl-f-li'>San Francisco, CA 94158</li>
          <li class='pl-f-li'>Phone: 123-456-7890</li>
          <li class='pl-f-li'>Email: info@mysite.com</li>
        </ul>
        <ul class='pl-ul-f'>
          <h2 class='pl-h2-f'>Shop</h2>
          <li class='pl-f-li'>Shop All</li>
          <li class='pl-f-li'>Plants</li>
          <li class='pl-f-li'>Pots</li>
          <li class='pl-f-li'>Sale</li>
          <li class='pl-f-li'>Subscriptions</li>
          <li class='pl-f-li'>Care</li>
        </ul>
        <ul class='pl-ul-f'>
          <h2 class='pl-h2-f'>Helpful Links</h2>
          <li class='pl-f-li'>FAQ</li>
          <li class='pl-f-li'>Shipping & Links</li>
          <li class='pl-f-li'>Terms & Conditions</li>
          <li class='pl-f-li'>Payment Methods</li>
        </ul>
        <ul class='pl-ul-f'>
          <h2 class='pl-h2-f'>Company</h2>
          <li class='pl-f-li'>Our Story</li>
          <li class='pl-f-li'>Contact Us</li>
        </ul>
        <ul class='pl-ul-f'>
          <h2 class='pl-h2-f'>Opening Hours</h2>
          <li class='pl-f-li'>Mon - Fri: 7am - 10pm</li>
          <li class='pl-f-li'>Saturday: 8am-10pm</li>
          <li class='pl-f-li'>Sunday: 8am - 11pm</li>
        </ul>
      </div>
      <hr class='pl-f-hr' />
      <p class='pl-all-rights'></p>
    </div>
  </div>
  );
}

export default App;
