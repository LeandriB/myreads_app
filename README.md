# MyReads App

The goal for this project was to create a React applicaton that allows users to select and categorize the books that they have read, want to read or are currently reading. This application utilizes a provided API server and library.

This application has been split up into 7 components:

* ```App.js``` - Holds **ListBooks** and **SearchBooks** components
* ```ListBooks.js``` - Displays all three bookshelfves
* ```SearchBooks.js``` - Displays search results from **SearchInput** component
* ```SearchInput.js``` - Queries a collection of books in database
* ```BookShelf.js``` - Displays books that user selected for a specific shelf
* ```Book.js``` - Displays book information: title, cover and author
* ```ChangeShelf.js``` - Displays the book's state

## Installation

1. Clone the directory
2. In the terminal, navigate to the root directory for this project
3. Run ```npm install``` to install all dependencies
4. Now that everything is set up, continue onto the section *How to run this program*

## How to run this program

Make sure all your dependencies are installed in your terminal or updated to the lasest version and run ```npm start``` to start the server.

## Project Preview

User selected books for each bookshelf:

![ListBooks Component](/img/ListBooks.png)

Data that is being pulled from the backend:

![SearchBooks Component](/img/SearchBooks.png)

## Backend Server

Udacity provided the backend server for this project. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Attributions

* How to use [Debounce](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086) to imporve application performance
* Rendering with [Conditional Operators](https://reactjs.org/docs/conditional-rendering.html)
* [James Priest](https://james-priest.github.io/reactnd-project-myreads/) breakdown of the My Reads Project to fully understand how to break down and split up the UI components.
* [Filtering](https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples) arrays with React
* ES6 [Static Properties](https://medium.com/@assortedPickle/es6-static-properties-b7fd2a163328)