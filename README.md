# PakRat

![packing](/assets/readme_images/packing.avif)

A PERN stack app with TailwindCSS styling.

Robert Buskirk-Lechner
[GitHub](https://github.com/robert-bl) | [LinkedIn](https://www.linkedin.com/in/robert-buskirk-lechner/)

PakRat allows you to create and save packing lists for trips.

Users can create accounts, then curate their own packing lists. Packing lists have an 'edit' and 'pack' displays, and items can be sorted into subcategories for ease of use. When editing a list users can add items and quantities of those items. When packing, users can check off items as they pack them.

![page](/assets/readme_images/packinglist.png)




### Project Planning

MVP
* Functioning Auth
* Users can CRUD packing lists and items
* Packing lists can be viewed in 'edit' and 'pack' setups
* Packing lists "save" (are posted/put) intuitively

Potential Stretch Goals
* Double entry detection
* Suggested items
* Making quantities dynamically update with variable trip lengths

#### Component Hierarchy
![Components](/assets/readme_images/componentheir.png)

#### ERD
![ERD](/assets/readme_images/ERD.png)


[Trello](https://trello.com/b/9eEmMGTF/pakrat)




Reference materials:

res.write()/res.end() methods:
https://blog.kevinchisholm.com/javascript/node-js/express-js/response-send-end-write-difference/

incorporating json.stringify into res.write() methods:
https://stackoverflow.com/questions/25209073/sending-multiple-responses-with-the-same-response-object-in-express-js

dynamic forms:
https://bapunawarsaddam.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5

accordion display in react:
https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

axios call syntax:
https://www.bezkoder.com/axios-request/#Axios_DELETE_request

toggle button:
https://flowbite.com/docs/forms/toggle/

progress bar:
https://flowbite.com/docs/components/progress/