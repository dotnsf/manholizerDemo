# Manholizer in Node.js with Watson Visual Recognition API

## Overview

Node.js demo application which detect faces on images, and 'manholize' them with appropriate place and color.

This application use IBM Watson Visual Recognition API. If you want to try this application, you need to register IBM Bluemix at first, and you need to get API Key string of Visual Recognition API.

## Files

<pre>
--- public/             : document root
 |   |- cvi_busy_lib.js :  JavaScript lib
 |   |- icon.png        :  icon
 |   |- index.html      :  main page
 |
 |- .gitignore          : .gitignore file
 |- app.js              : web application
 |- manifest.yml        : manifest.yml for IBM Bluemix
 |- packages.json       : packages.json for IBM Bluemix
 |- README.md           : this file
 |- settings.js         : setting variables
</pre>

## How to use

### Prerequisites

- Register IBM Bluemix

    * http://bluemix.net/

- Subscribe IBM Watson Visual Recognition API, and get API KEY string.

- Create a Node.js runtime in IBM Bluemix(optional).

- Edit your manifest.yml with you application name(optional).

- Install cf command line tool(optional).

    * https://github.com/cloudfoundry/cli/releases

### Install

- Install Node.js in your local machine.

- Download source files, and extend it.

    * $ git clone https://github.com/dotnsf/manholizerDemo

- Edit settings.js with your API KEY.

    * exports.vr_apykey = 'abcdabcdabcdabcdabcdabcd';

- Edit manifest.yml with your domain(if needed), application name and host.

    * domain: mybluemix.net

    * name: name_of_your_app

    * host: name_of_your_app

### Deploy( into IBM Bluemix )

- Deploy your application with cf command line tool.

    * $ cf push

### Enjoy!

Now you can browse your application from web browser.

## Licensing

This code is licensed under MIT.

## Copyright

2017 K.Kimura @ Juge.Me all rights reserved.






