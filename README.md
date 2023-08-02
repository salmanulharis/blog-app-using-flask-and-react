We use `flask marshmellow` to serialise and deserialise data

	pip install flask-marshmallow
	pip install marshmallow-sqlalchemy

`marshmallow-sqlalchemy` used beacuase we using sqlalchemy in flask.

if db create don't work use below code

	flask shell
	db.create_all()

or

	from project_name import app, db
	app.app_context().push()
	db.create_all()


In React, the `useEffect` hook is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM. The `useEffect` hook takes two arguments: a function to execute the side effect and an optional dependency array.

	useEffect(() => {

  	}, [])

The empty array `[]` passed as the second argument to `useEffect` indicates that the effect should only run once, immediately after the component is mounted. In other words, the effect function will be called after the first render and won't be triggered again on subsequent renders.

If the dependency array is not provided (or an empty array is passed), the effect runs only once. If you want the effect to run whenever a specific variable (dependency) changes, you can include that variable in the dependency array. For example:

	const [count, setCount] = useState(0);

	useEffect(() => {
	  console.log("The count has changed:", count);
	}, [count]);

In this case, the effect will run every time the `count` state variable changes. If the dependency array is not provided, the effect would log only once, similar to the initial example.

<br>

	useEffect(() => {
		fetch('http://127.0.0.1:5000/get', {
			'method': 'GET',
			'headers': {
				'Content-Type': 'application/json'
			}
		})
		.then(resp => resp.json())
		.then(resp => console.log(resp))
		.catch(error => console.log(error))
	}, [])

The code provided is a React functional component that uses the `useEffect` hook to perform a data fetching operation using the `fetch` API. The fetch is performed when the component is mounted (i.e., when it is first rendered), as indicated by the empty dependency array `[]` provided as the second argument to `useEffect`.

Here's a step-by-step explanation of the code:

1. When the component is mounted, the `useEffect` hook runs the provided callback function. In this case, the callback function is an asynchronous function.

2. Inside the callback function, the `fetch` function is used to send an HTTP GET request to the URL `'http://127.0.0.1:5000/get'`. This URL is assumed to be the endpoint of an API on the local server (localhost).

3. The `fetch` function takes an object as its second argument, where the HTTP method (`'GET'`) and the headers (`'Content-Type': 'application/json'`) are specified. In this case, the headers indicate that the server expects JSON data in the request and will respond with JSON data.

4. The `fetch` function returns a Promise that resolves with the HTTP response. The first `then` block is used to parse the response body as JSON using the `json()` method of the response object.

5. The second `then` block receives the parsed JSON data as a parameter, and it logs the response to the console using `console.log`.

6. If there is any error during the fetch operation or parsing of the response, the `catch` block logs the error to the console.

To summarize, this code fetches data from the specified URL using an HTTP GET request and expects the server to respond with JSON data. The fetched JSON data is then logged to the console. The fetching operation will occur only once, when the component is mounted.