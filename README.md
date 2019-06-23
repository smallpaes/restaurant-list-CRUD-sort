# Restaurant List v.2 🍣

An awesome web application built with Node.js, Express, and MongoDB for you to readily manage your restaurant lists: Create, view, edit, delete, filter, sort, and search restaurant are as easy as pie 🥧

## Project First Look
![Application Screen Shot in GIF](https://thumbs.gfycat.com/DeepCorruptCuttlefish-size_restricted.gif)
![Application Screen Shot in GIF](https://thumbs.gfycat.com/GreedyVacantJaeger-size_restricted.gif)


## Features
| Functions              | Detail                                            | URL                         |
| :--------------------: | ------------------------------------------------- | --------------------------- |
| View all restaurants | 1. User can view name, category, and rating of all restaurants<br>2. User can get an error message when no restaurant to display | / |
| View a restaurant detail | User can view restaurant name, category, address, description and image | /restaurants/:id |
| Create a restaurant | 1. User can add a new restaurant by inputting related info<br>2. User can get a placeholder image when image URL is not provided<br> 3. User can get a warning message below corresponded column when submitting invalid info | /restaurants/new |   
| Edit a restaurant | User can update detail info of a restaurant | /restaurants/:id/edit |
| Delete a restaurant | 1. User can delete a restaurant and receive warning message<br>2. User can receive a warning message before actual delete | /restaurants//:id/delete |
| Search restaurants by input | User can search restaurants by inputting name or category | /search |
| Search restaurants by rating | User can search restaurants by choosing a given rating | /search/rating/:rating |
| Search restaurants by category | User can search restaurants by choosing a given category | /search/category/:category |
| Filter restaurants | 1. User can filter restaurant list based on rating range<br>2. User can see the amount of restaurants at each rating range on filter panel | /filter |
| Sort all restaurants | User can sort restaurants list by name, rating, or category | /sort |
| Sort filtered restaurants | User can sort filtered restaurants list by name, rating, or category | /sort/:ratingOptions |
| Page not found | User can get an error message when travelling to a page not existing | /:any_other_URL |


## Installation
The following instructions will get you a copy of the project and all the setting needed to run it on your local machine.


### Prerequisites

- [Node.js v10.16.0](https://nodejs.org/en/download/)
- [MongoDB v4.0.10](https://www.mongodb.com/download-center/community)

### Clone

Clone this repository to your local machine

```
$ git clone https://github.com/smallpaes/restaurant-list-CRUD-sort.git
```

### Setup

1. Enter the project folder

```
$ cd restaurant-list-CRUD-sort
```

2. Install npm packages

```
$ npm install
```

3. Import seed restaurants file

```
$ cd models/seeds
$ node restaurantSeeder.js
```

4. Find the message for successful import

```
> db connected!
> restaurant seeds are created
```

5. Activate the server 

```
$ cd ../../
$ npm run dev
```

6. Find the message for successful activation

```
> Express is listening on http://localhost:3000
> mongodb connected!
```
You may visit the application on browser with the URL: http://localhost:3000

## Authors
[Mike Huang](https://github.com/smallpaes)