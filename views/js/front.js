/**
* 2007-2019 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2019 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/
window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000"
      },
      "button": {
        "background": "transparent",
        "text": "#f1d600",
        "border": "#f1d600"
      }
    },
    "position": "bottom-right",
    elements: {
      header: '<span class="cc-header">{{header}}</span>&nbsp;',
      pictureOfCat: '<img href="http://placekitten/300/300" />',
      message: ' website uses cookies to ensure you get the best experience on our website.',
    },
    content: {
      header: 'Cookies used on the website!',
      message: 'This website uses cookies to ensure you get the best experience on our website.',
      dismiss: 'Got it!',
      allow: 'Allow cookies',
      deny: 'Decline',
      link: 'Learn more',
      href: 'http://cookiesandyou.com',
      close: '&#x274c;',
      policy: 'Cookie Policy',
      target: '_blank',
    }
    
    
  })});