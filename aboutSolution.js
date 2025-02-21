```javascript
// pages/aboutSolution.js

export default function About() {
  const data = { message: 'Data is now defined!' }; // Define data locally
  console.log(data);
  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```